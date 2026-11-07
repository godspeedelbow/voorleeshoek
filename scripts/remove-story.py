"""Remove one video from the Voorleeshoek catalog."""
import argparse
import json
import re
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

DIST = Path(__file__).resolve().parents[1] / 'dist'
VIDEO_ID = re.compile(r'[A-Za-z0-9_-]{11}')
STORIES_VERSION = re.compile(r'(src="\./stories\.js\?v=)(\d+)(")')


def video_id(value):
    if VIDEO_ID.fullmatch(value):
        return value
    try:
        url = urlsplit(value)
        if (url.scheme == 'https' and url.hostname == 'godspeedelbow.github.io'
                and url.path in {'/voorleeshoek/', '/voorleeshoek/index.html'}):
            ids = parse_qs(url.query).get('v', [])
            if len(ids) == 1 and VIDEO_ID.fullmatch(ids[0]):
                return ids[0]
    except ValueError:
        pass
    raise argparse.ArgumentTypeError('Geef een video-ID of een Voorleeshoek-link met ?v= op.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('video', nargs='+', type=video_id)
    args = parser.parse_args()
    catalog = DIST / 'stories.js'
    source = catalog.read_text(encoding='utf-8')
    removed = []
    for video in dict.fromkeys(args.video):
        row = re.compile(rf'^( +)\["{re.escape(video)}",.*\],$', re.MULTILINE)
        matches = list(row.finditer(source))
        if not matches:
            print(f'{video} staat al buiten de catalogus.')
            continue
        if len(matches) != 1:
            parser.error(f'{video} komt meerdere keren voor in de catalogus.')

        match = matches[0]
        _, title, *_ = json.JSONDecoder().raw_decode(match[0].lstrip())[0]
        # Keep this array slot empty so older rounds still refer to the right videos.
        tombstone = f'{match[1]}, // Verwijderd: {video}'
        source = source[:match.start()] + tombstone + source[match.end():]
        removed.append((video, title))

    if not removed:
        return

    pages = {DIST / name: (DIST / name).read_text(encoding='utf-8')
             for name in ('index.html', 'ouders.html')}
    versions = []
    for path, html in pages.items():
        refs = STORIES_VERSION.findall(html)
        if len(refs) != 1:
            parser.error(f'Verwacht precies één catalogusversie in {path.name}.')
        versions.append(int(refs[0][1]))
    version = max(versions) + 1

    catalog.write_text(source, encoding='utf-8')
    for path, html in pages.items():
        path.write_text(STORIES_VERSION.sub(lambda ref: f'{ref[1]}{version}{ref[3]}', html), encoding='utf-8')
    for video, title in removed:
        print(f'Verwijderd: {title} ({video}).')
    print(f'Catalogusversie: {version}.')


if __name__ == '__main__':
    main()
