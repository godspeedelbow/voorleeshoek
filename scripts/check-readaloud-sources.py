"""Report new candidates from the curated sources; never publish them."""
import concurrent.futures
import html
import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
SOURCES = (
    ("nl", "Digitaal voorlezen — SBS De Regenboog", "PLNT4QyNEDn1u00lhH1col4_IPtA9-J9AV"),
    ("nl", "Prentenboeken voor peuters en kleuters", "PLQ6VhB46EjlozFt9NooG9WOd8an6qDJAm"),
    ("sv", "Alfons Åberg — Pappa Läser", "PLud49CMnVS-uezwgdUX-6TsIiUo19Cxkb"),
    ("sv", "Sagostunder — Biblioteken Sigtuna", "PL18UmUUiYDLxO7nQdgmYsZYyUCxdUegiJ"),
    ("sv", "Mamma Mu + Pettsson och Findus — Pappa Läser", "PLud49CMnVS-vvEhOTTMQybYP0_jcu98y1"),
    ("sv", "Svedala Bibliotek", "https://bibliotek.svedala.se/-/ga-pa-sagostund-pa-biblioteket-hemifran-"),
    ("es", "Brightly Storytime", "PLDcpsppkgAlprCkvGAaocwwaATXz6TXad"),
    ("es", "Cuentos para niños 4-6 años — Cuéntame un cuento Mami", "PL7I-SHBtRCFy4cSccICOQhVXCHWruat4R"),
    ("es", "Biblioteca Pública Municipal de Baza", "https://www.bibliotecaspublicas.es/baza/Infantil/Cuentos-Infantiles.html"),
)
VIDEO_ID = r"[A-Za-z0-9_-]{11}"
NS = {"atom": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}


def candidates(source):
    is_page = source.startswith("https://")
    url = source if is_page else f"https://www.youtube.com/feeds/videos.xml?playlist_id={source}"
    with urlopen(Request(url, headers={"User-Agent": "Voorleeshoek source review"}), timeout=20) as response:
        data = response.read()
    if is_page:
        return [(video_id, "") for video_id in re.findall(
            rf"https://(?:www\.)?youtube(?:-nocookie)?\.com/embed/({VIDEO_ID})(?![\w-])",
            data.decode("utf-8"),
        )]
    feed = ElementTree.fromstring(data)
    return [(entry.findtext("yt:videoId", namespaces=NS),
             entry.findtext("atom:title", "", NS))
            for entry in feed.findall("atom:entry", NS)]


def main():
    catalog = (ROOT / "dist/stories.js").read_text(encoding="utf-8")
    seen = set(re.findall(rf'^\s*\["({VIDEO_ID})",', catalog, re.MULTILINE))
    seen.update(re.findall(rf"^\s*, // Verwijderd: ({VIDEO_ID})$", catalog, re.MULTILINE))
    print("# Voorleesboeken om te bekijken")
    print("\nControleer leeftijd, gesproken taal, voorleesvorm en afspeelbaarheid "
          "voordat je een video aan de app toevoegt. YouTube toont via de feed "
          "alleen een selectie van de lijst.\n")
    failed = False
    with concurrent.futures.ThreadPoolExecutor() as executor:
        checks = [executor.submit(candidates, source) for _, _, source in SOURCES]
        for (language, name, source), check in zip(SOURCES, checks):
            url = source if source.startswith("https://") else f"https://www.youtube.com/playlist?list={source}"
            print(f"\n## {language.upper()} · [{name}]({url})\n")
            try:
                videos = check.result()
            except (OSError, ValueError, ElementTree.ParseError) as error:
                print(f"Bron niet opgehaald: {error}")
                failed = True
                continue
            count = 0
            for video_id, title in videos:
                if not video_id or not re.fullmatch(VIDEO_ID, video_id) or video_id in seen:
                    continue
                seen.add(video_id)
                count += 1
                label = html.escape(" ".join(title.split())).replace("[", "&#91;").replace("]", "&#93;")
                print(f"- [{label or video_id}](https://www.youtube.com/watch?v={video_id})")
            if not count:
                print("Geen kandidaten buiten de huidige catalogus.")
    return int(failed)


if __name__ == "__main__":
    sys.exit(main())
