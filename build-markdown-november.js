/**
 * build-markdown-november.js — renders songs-data-november.js into November.md,
 * in the same style as build-markdown-oktoberfest.js (setlist + one fenced
 * code block per section, chords stacked over lyrics).
 *
 * Run with: node build-markdown-november.js
 */
const fs = require('fs');
const path = require('path');

const T = require('./transpose.js');
const SONGS = require('./songs-data-november.js');

function slug(title) {
  return title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function songHeaderMeta(song) {
  var parts = [];
  if (song.bpm) {
    parts.push('♩ **' + (song.bpmApprox ? '~' : '') + song.bpm + ' BPM**');
  }
  var keyStr = 'Key of **' + song.key + '**';
  if (song.keyNote) keyStr += ' (' + song.keyNote + ')';
  parts.push(keyStr);
  return parts.join(' · ');
}

function renderSection(section) {
  var out = ['**[' + section.label + ']**', ''];
  var lines = section.lines.map(function (line) {
    return line.startsWith('// ') ? '*(' + line.slice(3) + ')*' : line;
  });
  // Note-only lines get pulled out of the fenced block (they're prose, not chart).
  var block = [];
  var chunks = []; // { type: 'code'|'note', lines: [] }
  function pushCurrent() {
    if (block.length) {
      chunks.push({ type: 'code', lines: block.slice() });
      block = [];
    }
  }
  lines.forEach(function (l, i) {
    var raw = section.lines[i];
    if (raw.startsWith('// ')) {
      pushCurrent();
      chunks.push({ type: 'note', text: l });
    } else {
      block.push(l);
    }
  });
  pushCurrent();

  chunks.forEach(function (c) {
    if (c.type === 'note') {
      out.push(c.text, '');
    } else {
      out.push('```', c.lines.join('\n'), '```', '');
    }
  });
  return out.join('\n');
}

function renderSong(song) {
  var out = [];
  out.push('## ' + song.number + '. ' + song.title + ' — ' + song.artist);
  if (song.subtitle) out.push('*' + song.subtitle + '*');
  out.push(songHeaderMeta(song));
  if (song.note) out.push('', '> ' + song.note);
  if (song.bpmNote) out.push('', '> ' + song.bpmNote);
  out.push('');
  song.sections.forEach(function (sec) {
    out.push(renderSection(sec));
  });
  return out.join('\n');
}

function renderSetlist() {
  return SONGS.map(function (song) {
    var meta = [];
    if (song.subtitle) meta.push(song.subtitle);
    if (song.bpm) meta.push('♩ ' + (song.bpmApprox ? '~' : '') + song.bpm + ' BPM');
    meta.push('Key of ' + (song.keyNote || song.key));
    return song.number + '. [' + song.title + '](#' + song.number + '-' + slug(song.title) + ') — ' +
      song.artist + ' · ' + meta.join(' · ');
  }).join('\n');
}

var doc = [];
doc.push('# November — Chord Guide');
doc.push('');
doc.push('> ' + SONGS.length + ' songs · same layout and transpose toolbar as the Oktoberfest guide (see `chord_guide_november.html`)');
doc.push('> Source chords: the `.docx` chord sheets in this folder (`NOVEMBER/`)');
doc.push('');
doc.push('---');
doc.push('');
doc.push('## About — Key Transposition');
doc.push('');
doc.push('`chord_guide_november.html` adds a per-song **Key** toolbar (below each song title), same as the other guides:');
doc.push('');
doc.push('- Shows the key the chart is written in (e.g. `D`).');
doc.push('- **− / +** buttons step the whole song up or down one semitone at a time.');
doc.push('- The key dropdown jumps straight to any of the 12 keys (key-to-key transposition, e.g. D → G).');
doc.push('- **Reset** returns to the original written key.');
doc.push('- Transposing only rewrites the chords (roots, slash-chord bass notes, and all extensions/qualities like `maj7`, `add9`, `sus4`, `m7b5` are preserved) — lyrics, section labels, and chord-to-lyric spacing are untouched.');
doc.push('- Every chord is spelled with sharps (C#, D#, F#, G#, A#), in every key, including after transposing; the key dropdown lists sharps too.');
doc.push('');
doc.push('The transpose engine lives in `transpose.js` (also usable from Node) with its test suite in `test_transpose.js` (`node test_transpose.js`). Shared with the other guides; this copy also knows `add#11` (The Only Exception\'s Aadd#11).');
doc.push('');
doc.push("BPM notes: taken from the sheets — Push 84, Lips of an Angel 64. Pahina's sheet says 160 counted in eighths; it's 80 here, as in the August 2026 guide. The Only Exception's 138 is halved to 69 the same way, and I'm With You's 152 to 76. The other songs have no BPM on their sheets and scroll at the default pace. Capo and tuning are in each song's note.");
doc.push('');
doc.push('**Auto-scroll** in `chord_guide_november.html` stops at the end of each song (when its last line reaches the bottom of the screen); press Auto-Scroll again to carry on into the next song at that song\'s BPM.');
doc.push('');
doc.push('---');
doc.push('');
doc.push('## Setlist');
doc.push('');
doc.push(renderSetlist());
doc.push('');
doc.push('---');
doc.push('');
SONGS.forEach(function (song, i) {
  doc.push(renderSong(song));
  doc.push('---');
  doc.push('');
});

var outPath = path.join(__dirname, 'November.md');
fs.writeFileSync(outPath, doc.join('\n').replace(/\n{3,}/g, '\n\n\n'), 'utf8');
console.log('Wrote', outPath);
