"""Print catalog rows for approved YouTube videos."""
import argparse
import json
import re
from urllib.parse import parse_qs, urlencode, urlsplit
from urllib.request import urlopen

from catalog_policy import excluded_channel

YOUTUBE = 'https://www.youtube.com'
VIDEO_ID = re.compile(r'[A-Za-z0-9_-]{11}')
DURATION = re.compile(r'<meta itemprop="duration" content="PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?"')


def video_id(value):
    if VIDEO_ID.fullmatch(value):
        return value

    try:
        url = urlsplit(value)
        host = url.hostname
    except ValueError as error:
        raise argparse.ArgumentTypeError(f'Geen geldige YouTube-link: {value}') from error
    path = url.path.strip('/').split('/')
    candidate = ''
    if host == 'youtu.be' and len(path) == 1:
        candidate = path[0]
    elif host in {'www.youtube.com', 'youtube.com', 'm.youtube.com'}:
        if path == ['watch']:
            candidate = parse_qs(url.query).get('v', [''])[0]
        elif len(path) == 2 and path[0] in {'embed', 'shorts', 'live'}:
            candidate = path[1]
    if url.scheme in {'http', 'https'} and VIDEO_ID.fullmatch(candidate):
        return candidate
    raise argparse.ArgumentTypeError(f'Geen geldige YouTube-link of video-ID: {value}')


def fetch(url):
    with urlopen(url, timeout=15) as response:
        return response.read().decode('utf-8')


def video_results(node):
    if isinstance(node, dict):
        if 'videoRenderer' in node:
            yield node['videoRenderer']
        for child in node.values():
            yield from video_results(child)
    elif isinstance(node, list):
        for child in node:
            yield from video_results(child)


def duration_from_search(video, term):
    query = urlencode({'search_query': term})
    page = fetch(f'{YOUTUBE}/results?{query}')
    match = re.search(r'var ytInitialData\s*=\s*', page)
    if not match:
        return None
    data, _ = json.JSONDecoder().raw_decode(page[match.end():])
    for result in video_results(data):
        if result.get('videoId') == video:
            time = result.get('lengthText', {}).get('simpleText', '')
            if re.fullmatch(r'\d+(?::\d{2}){1,2}', time):
                return sum(int(part) * 60 ** index for index, part in enumerate(reversed(time.split(':'))))
    return None


def duration_seconds(video, watch_url, title):
    try:
        match = DURATION.search(fetch(watch_url))
    except OSError:
        match = None
    if match:
        hours, minutes, seconds = (int(part or 0) for part in match.groups())
        return hours * 3600 + minutes * 60 + seconds
    return duration_from_search(video, video) or duration_from_search(video, title)


def catalog_row(video, language):
    watch_url = f'{YOUTUBE}/watch?v={video}'
    query = urlencode({'url': watch_url, 'format': 'json'})
    metadata = json.loads(fetch(f'{YOUTUBE}/oembed?{query}'))
    title = metadata['title'].strip()
    channel = metadata['author_name'].strip()
    if excluded_channel(channel):
        raise ValueError('Video’s van Ouderraad-kanalen horen niet in de catalogus.')
    if not title or not channel or channel.startswith('@'):
        raise ValueError('YouTube geeft geen titel of zichtbare kanaalnaam.')
    duration = duration_seconds(video, watch_url, title)
    if not duration:
        raise ValueError('Speelduur ontbreekt in de openbare videogegevens.')
    return [video, title, language, channel, duration]


def main():
    parser = argparse.ArgumentParser(description='Haal YouTube-gegevens op voor nieuwe voorleesfilmpjes.')
    parser.add_argument('taal', choices=('nl', 'sv', 'es'))
    parser.add_argument('video', nargs='+', type=video_id)
    args = parser.parse_args()

    rows = []
    for video in dict.fromkeys(args.video):
        try:
            rows.append(catalog_row(video, args.taal))
        except (OSError, KeyError, ValueError) as error:
            parser.exit(1, f'{video}: {error}\n')

    for row in rows:
        print('  ' + json.dumps(row, ensure_ascii=False) + ',')


if __name__ == '__main__':
    main()
