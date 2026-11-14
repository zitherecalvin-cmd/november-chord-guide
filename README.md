# November

The November set: 17 songs, in one page — **`chord_guide_november.html`**.

Same layout and features as the Oktoberfest guide: transpose and key picker,
BPM-synced auto-scroll with fine-tune, pause on hover, stop at the end of
each song, Top button, print styles, phone/tablet drawer.

| File | What it is |
| --- | --- |
| `chord_guide_november.html` | Interactive chord guide (open from disk or on a phone/tablet) |
| `songs-data-november.js` | Song data — single source of truth for the page and the Markdown |
| `November.md` | Markdown chart, generated from the song data |
| `build-markdown-november.js` | `node build-markdown-november.js` regenerates `November.md` |
| `transpose.js` / `test_transpose.js` | Transpose engine and its tests (`node test_transpose.js`) |
| `*.docx` | Source chord sheets |

After editing `songs-data-november.js`, run `node build-markdown-november.js`
to refresh the Markdown; the HTML page reads the data file directly.
