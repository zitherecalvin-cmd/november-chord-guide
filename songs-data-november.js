/**
 * songs-data-november.js — the "November" setlist (17 songs).
 *
 * Same shape as songs-data-oktoberfest.js: each song is written-key chords
 * stacked over lyrics, grouped into labeled sections. `transpose.js` operates
 * directly on these raw lines, so this file is the single source of truth for
 * both the Markdown chart (build-markdown-november.js -> November.md) and the
 * interactive HTML page (chord_guide_november.html).
 *
 * A line that starts with "// " is a performance note/directive, shown as an
 * italic note (not transposed).
 *
 * Sources: the 18 .docx chord sheets in this folder (NOVEMBER/), chords and
 * lyrics as written. Sheet front matter (difficulty, tuning, chord lists,
 * strumming diagrams, credits/sign-offs) is left out; capo / tuning goes in
 * each song's note. Small edits so every chord transposes:
 * - Kahit Di Mo Alam: "2x" written as "x2"; the Instrumental's hyphen-joined
 *   "A#-A#sus-A#/D#-D#9" spaced out as "A# - A#sus - A#/D# - D#9". The
 *   chord-shape diagrams at the end of the sheet are left out.
 * - I Think God Can Explain: the sheet has no [bracketed] section labels, so
 *   sections come from its plain headings (Intro, Verse1, Chorus, ...); the
 *   blank lines Word put between each chord line and its lyric are removed;
 *   "[quick transition]" is written "(quick transition)" and en dashes as
 *   hyphens so those chord lines transpose.
 * - Gusto Ko Lamang Sa Buhay and Jet Lag: the Intro guitar tab riffs are left
 *   out (they wouldn't transpose); the Intro chords are kept.
 * - Aurora Sunrise / The Only Exception: the sheet's leading-space indent is
 *   removed per section (chord-to-lyric alignment unchanged).
 * - The Only Exception: Aadd#11 needed `add#11` in transpose.js's chord
 *   qualities (added, with tests).
 *
 * Keys: from each sheet's "Key:", except where the sheet's key is the
 * sounding key of a capo / tuned-down chart (Push: sheet F#, written in G;
 * Over You: sheet Eb, written in D) or doesn't match the chords (Jeepney:
 * sheet F, chords centre on A minor; Mahal Magmahal: sheet C, chords in G).
 * Kahit Di Mo Alam is written in A# (sheet: "Key: A", capo 1), so its key is
 * Bb on the picker; at the original key the chart shows the sheet's A#
 * spelling. Sheets with no key: Gusto Ko Lamang Sa Buhay (D), Sailing (G),
 * Two Is Better Than One (C), I Think God Can Explain (G), Bakit Part 2 (E),
 * Jet Lag (B).
 *
 * BPM: from the sheets — Push 84, Lips of an Angel 64, Aurora Sunrise 81.
 * Pahina's sheet says 160 (counted in eighths); 80 as in the AUGUST 2026
 * guide. The Only Exception's sheet says 138 (eighths), halved to 69 the
 * same way. Songs with no BPM fall back to the default auto-scroll pace.
 *
 * Christmas In Our Hearts: its sheet has only Intro, Verse 1, Pre-chorus 1
 * and Chorus; the chart has the same.
 *
 * 2026-11-12 (user-requested): base keys set to the keys the set is played
 * in, so the page opens (and Reset returns) to them and November.md shows
 * them. Chord lines re-written in the new key, each chord kept at its
 * column over the lyric: Sailing G -> A, Push G -> F#, I Think God Can
 * Explain G -> Bb, Bakit Part 2 E -> Eb, Over You D -> Eb; Kahit Di Mo Alam
 * stays Bb, respelled from the sheet's A# to Bb. Notes now say how the
 * sheet's capo / tuning relates to the written key (Sailing's Interlude keeps
 * flat names: Ebmaj7, Abmaj7, Bb). The other 12 songs
 * were already in the requested keys (Jeepney: A minor).
 *
 * 2026-11-12 (later, user-requested): Christmas In Our Hearts F -> G.
 *
 * 2026-11-14 (user-requested): songs 17 (Christmas In Our Hearts) and 18
 * (Beer) replaced by one song, #17 "Careless Christmas with Beer", from
 * "Careless Christmas with Beer.docx": a Careless Whisper intro
 * (Em Am C Bm x2), then Christmas In Our Hearts, then Beer, in G. Chords and
 * lyrics as the sheet writes them; its labels "CARELESS INTRO", "CHRISTMAS
 * Verse 1" and "BEER Intro" written in title case. The Christmas Chorus's
 * last chord line is spaced with tabs on the sheet ("C  D  G"); written with
 * spaces as C over "always", D over "in", G over "hearts". The set is now
 * 17 songs; the two separate .docx sheets stay in the folder.
 *
 * 2026-11-14 (later, user correction from the .docx): Pre-chorus 1, "And all
 * are one in God": Bm D7 moved from over "in" to over "God".
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NOVEMBER_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Kahit Di Mo Alam",
      artist: "December Avenue",
      key: "Bb",
      note: "Capo 1st fret: play the A shapes (A, Asus, A/D, D9, E7, AM7) to get these Bb chords.",
      sections: [
        { label: "Intro", lines: [
          "Bb Bbsus Bb/Eb Eb9  x2"
        ] },
        { label: "Verse", lines: [
          "    Bb",
          "Ipikit mo man ang iyong mata",
          "      Bbsus",
          "Di pa rin naman mag-iiba",
          "Bb/Eb                           Eb9",
          "Nabalutan ng poot ang puso mo",
          "      Bb",
          "Tila malimit kang ngumiti ngayon",
          "    Bbsus",
          "Di ka rin naman ganyan noon",
          "Bb/Eb                            Eb9",
          "Na ubusan ng tibok ang puso mo"
        ] },
        { label: "Refrain", lines: [
          "    Gm",
          "Kulang na ba ang mga ulap",
          "F",
          "Sa langit at buwan",
          "   Eb9                      F7",
          "Di ka na babalik sa lilim ng ulan"
        ] },
        { label: "Chorus", lines: [
          "Bb",
          "Sa bawat saglit",
          "             BbM7",
          "Handang masaktan",
          "                 Eb9 F7",
          "Kahit di mo alam",
          "             Bb",
          "Subukang muli",
          "           BbM7",
          "At pagbigyan",
          "                Eb9 F7",
          "Ang ating nakaraan...",
          "Kahit di mo na alam (pause after F7)"
        ] },
        { label: "Instrumental", lines: [
          "Bb - Bbsus - Bb/Eb - Eb9  x2"
        ] },
        { label: "Verse", lines: [
          "   Bb",
          "Ipikit mo na ang iyong mata",
          "    Bbsus",
          "Ang nakaraa'y limutin na",
          "Bb/Eb                       Eb9",
          "Umaasang di ka na mawawala",
          "   Bb",
          "Sadyang mahirap lang ngumiti ngayon",
          "  Bbsus",
          "Minahal kita mula noon",
          "Bb/Eb                       Eb9",
          "Ibalik na ang tibok ng puso mo."
        ] },
        { label: "Refrain", lines: [
          "    Gm",
          "Kulang na ba ang mga ulap",
          "F",
          "Sa langit at buwan",
          "Eb9                         F7",
          "Di ka na babalik sa lilim ng ulan"
        ] },
        { label: "Chorus", lines: [
          "Bb",
          "Sa bawat saglit",
          "             BbM7",
          "Handang masaktan",
          "                 Eb9 F7",
          "Kahit di mo alam",
          "             Bb",
          "Subukang muli",
          "           BbM7",
          "At pagbigyan",
          "                Eb9 F7",
          "Ang ating nakaraan...",
          "Kahit di mo na alam",
          "",
          "Bb Bbsus Bb/Eb Eb9",
          "Kahit di mo na alam",
          "Kahit di mo na.."
        ] },
        { label: "Instrumental", lines: [
          "Gm F Eb9 F7  x2"
        ] },
        { label: "Chorus", lines: [
          "Bb",
          "Sa bawat saglit",
          "BbM7",
          "Handang masaktan",
          "                   Eb9 F7",
          "Kahit di mo alam",
          "",
          "             Bb",
          "Subukang muli",
          "           BbM7",
          "At pagbigyan",
          "                Eb9 F7",
          "Ang ating nakaraan",
          "                  Bb Bbsus",
          "Kahit di mo na alam",
          "                 Bb/Eb Eb9",
          "Kahit di mo na alam",
          "                  Bb Bbsus",
          "Kahit di mo na alam",
          "                Bb/Eb Eb9",
          "Kahit di mo na alam"
        ] }
      ]
    },
    {
      number: 2,
      title: "Pahina",
      artist: "Cup of Joe",
      key: "G",
      bpm: 80,
      sections: [
        { label: "Intro", lines: [
          "Cmaj7        G         D"
        ] },
        { label: "Verse 1", lines: [
          "Cmaj7                    G      D",
          "'Di na makausad, 'di malinawan",
          "Cmaj7                         G     D",
          "'Di na mabura ang iyong mga larawan",
          "Cmaj7                                                           G  D",
          "'Di alam kung sa'n tutungo ang mga hakbang patalikod, naghihingalo",
          "Cmaj7                                      G     D",
          "Ang lapis na ginamit sa kuwento nating naudlot"
        ] },
        { label: "Pre-Chorus", lines: [
          "Cmaj7                           G D",
          "Bawat buklat ng aklat, binabalikan",
          "Cmaj7                            G",
          "Mga liham na ang laman ligayang dala",
          "               D",
          "Ikaw lang ang may akda"
        ] },
        { label: "Chorus", lines: [
          "Cadd9",
          "Sa lahat ng pahinang sinulat ng tadhana'y",
          " G               D",
          "Ikaw at ikaw at ikaw pa rin",
          "Cadd9",
          "Ang yugtong paulit-ulit kong babalik-balikan",
          " G                 D",
          "Sigaw ay sigaw ay ikaw pa rin",
          "",
          "Cadd9",
          "Patuloy kong panghahawakan ang 'yong mga salitang",
          "G                     D",
          "Hindi na nakikita sa tingin ng 'yong mga mata",
          "Cadd9",
          "Ngunit kung sarado na ang puso sa nadarama",
          "G                           D                 Cmaj7",
          "Puwede bang isipin mo kung bakit tayo nagsimula?"
        ] },
        { label: "Verse 2", lines: [
          "Cmaj7",
          "Ating katotohana'y",
          "                  G   D",
          "Naging isang nobelang",
          "Cmaj7",
          "Winakasan ng pagdududang",
          "            G   D",
          "'Di na nalabanan",
          "Cmaj7",
          "Nais na maramdaman muli",
          "                   G           D",
          "Kung pa'no isulat ang pangalan mo",
          "Cmaj7",
          "Ngunit bawat letra'y mahirap nang iguhit",
          "G                        D",
          "Dahil binubuo nila ang 'yong mga pangako"
        ] },
        { label: "Chorus", lines: [
          "Cadd9",
          "Sa lahat ng pahinang sinulat ng tadhana'y",
          " G               D",
          "Ikaw at ikaw at ikaw pa rin",
          "Cadd9",
          "Ang yugtong paulit-ulit kong babalik-balikan",
          " G                 D",
          "Sigaw ay sigaw ay ikaw pa rin"
        ] },
        { label: "Bridge", lines: [
          "Cmaj7",
          "Simula sa wakas na 'di matuklasan",
          "      G                  D",
          "Pabalik kung saan 'di na natagpuan",
          "Cmaj7",
          "Ang mga matang nakatanaw sa umpisa",
          "       G                 D",
          "Ng yugtong 'di na sana naisulat pa",
          "Cmaj7",
          "Simula sa wakas na 'di matuklasan",
          "    G                     D",
          "Pabalik kung saan 'di na natagpuan",
          "    Cmaj7",
          "Ang mga matang nakatanaw sa umpisa",
          "       G                 D",
          "Ng yugtong 'di na sana naisulat pa"
        ] },
        { label: "Chorus", lines: [
          "Cadd9",
          "Sa lahat ng pahinang sinulat ng tadhana'y",
          "  G              D",
          "Ikaw at ikaw at ikaw pa rin",
          "Cadd9",
          "Ang yugtong paulit-ulit kong babalik-balikan",
          "  G                D",
          "Sigaw ay sigaw ay ikaw pa rin",
          "Cadd9",
          "Patuloy kong panghahawakan ang 'yong mga salitang",
          "G                     D",
          "Hindi na nakikita sa tingin ng 'yong mga mata",
          "Cadd9",
          "Ngunit kung sarado na ang puso sa nadarama",
          "G                           D                 Cmaj7",
          "Puwede bang isipin mo kung bakit tayo nagsimula?"
        ] },
        { label: "Outro", lines: [
          "Cmaj7",
          "(Simula sa wakas na 'di matuklasan)",
          "   G              D",
          "Ikaw at ikaw at ikaw pa rin",
          "(Pabalik kung saan 'di na natagpuan)",
          "",
          "     Cmaj7",
          "(Ang mga matang nakatanaw sa umpisa)",
          "   G               D",
          "Sigaw ay sigaw ay...",
          "(Ng yugtong 'di na sana naisulat pa)"
        ] }
      ]
    },
    {
      number: 3,
      title: "Sailing",
      artist: "Christopher Cross",
      key: "A",
      note: "Written in A. The source sheet is in G with capo 2nd fret, which gives the same chords.",
      sections: [
        { label: "Intro", lines: [
          "A   D Dadd2         Bm      F#m  A/C#   D",
          "D   F#m D           A"
        ] },
        { label: "Verse 1", lines: [
          "            D",
          "Well, it's not far down to paradise, at least it's not for me",
          "            F#m",
          "And if the wind is right you can sail away and find tranquility",
          "          D",
          "Oh, the canvas can do miracles, just you wait and see",
          "   A",
          "Believe me"
        ] },
        { label: "Verse 2", lines: [
          "          D",
          "It's not far to never-never land, no reason to pretend",
          "            F#m",
          "And if the wind is right you can find the joy of innocence again",
          "          D",
          "Oh, the canvas can do miracles, just you wait and see",
          "   A",
          "Believe me"
        ] },
        { label: "Chorus", lines: [
          "A                                           D",
          "Sailing takes me away to where I've always heard it could be",
          "         Bm                   F#m",
          "Just a dream and the wind to carry me",
          "    C#m7            D/A",
          "And soon I will be free"
        ] },
        { label: "Tag", lines: [
          "A",
          "Fantasy, it gets the best of me",
          "E/G#      F#m",
          "When I'm sailing",
          "D",
          "All caught up in the reverie, every word is a symphony",
          "            A",
          "Won't you believe me?"
        ] },
        { label: "Chorus", lines: [
          "A                                           D",
          "Sailing takes me away to where I've always heard it could be",
          "         Bm                   F#m",
          "Just a dream and the wind to carry me",
          "     C#m7           D/A",
          "And soon I will be free"
        ] },
        { label: "Interlude", lines: [
          "A    Fmaj7    G    Ebmaj7   F    G",
          "C    Abmaj7   Bb   F    G    A"
        ] },
        { label: "Verse 3", lines: [
          "            D",
          "Well it's not far back to sanity, at least it's not for me",
          "             F#m",
          "And if the wind is right you can sail away and find serenity",
          "          D",
          "Oh, the canvas can do miracles, just you wait and see",
          "  A",
          "Believe me"
        ] },
        { label: "Chorus", lines: [
          "A                                           D",
          "Sailing takes me away to where I've always heard it could be",
          "         Bm                   F#m",
          "Just a dream and the wind to carry me",
          "     C#m7           D/A",
          "And soon I will be free"
        ] }
      ]
    },
    {
      number: 4,
      title: "Two Is Better Than One",
      artist: "Boys Like Girls",
      key: "C",
      sections: [
        { label: "Intro", lines: [
          "C"
        ] },
        { label: "Verse 1", lines: [
          "C",
          "I remember what you wore on the first day",
          "Am",
          "You came into my life",
          "               F",
          "And I thought hey",
          "               G                C",
          "You know this could be something",
          "C",
          "'Cause everything you do and words you say",
          "Am",
          "You know that it all takes my breath away",
          "F                G            C",
          "And now I'm left with nothing"
        ] },
        { label: "Chorus", lines: [
          "                    F                   G",
          "'Cause maybe it's true that I can't live without you",
          "            F                 G",
          "And maybe two is better than one",
          "             F            G",
          "There's so much time to figure out the rest of my life",
          "     Am                 G             F",
          "And you've already got me coming undone",
          "     Am               G               C",
          "And I'm thinking two is better than one"
        ] },
        { label: "Verse 2", lines: [
          "C",
          "I remember every look upon your face",
          "Am",
          "The way you roll your eyes, the way you taste",
          "F             G",
          "You make it hard for breathing",
          "C",
          "'Cause when I close my eyes and drift away",
          "Am",
          "I think of you and everything's okay",
          "F             G",
          "I'm finally now believing"
        ] },
        { label: "Chorus", lines: [
          "                    F                   G",
          "'Cause maybe it's true that I can't live without you",
          "            F                 G",
          "And maybe two is better than one",
          "             F            G",
          "There's so much time to figure out the rest of my life",
          "     Am                 G             F",
          "And you've already got me coming undone",
          "     Am               G",
          "And I'm thinking two is better than one",
          "",
          "F   G Am   G F     G",
          "Yeah, yeah"
        ] },
        { label: "Bridge", lines: [
          "C N.C.",
          "I remember what you wore on the first day",
          "Am",
          "You came into my life",
          "F",
          "And I thought hey"
        ] },
        { label: "Chorus", lines: [
          "           F                   G",
          "Maybe it's true that I can't live without you",
          "        F                 G",
          "Maybe two is better than one",
          "               F          G",
          "There's so much time to figure out the rest of my life",
          "     Am               G               F",
          "And you've already got me coming undone",
          "",
          "And I'm thinking",
          "",
          " F             G",
          "Oooh I can't live without you",
          "",
          "                F                 G",
          "'Cause, baby, two is better than one",
          "              F           G",
          "There's so much time to figure out the rest of my life",
          "             Am            G                 F",
          "And I've figured out with all that's said and done",
          "Am    G               C Am",
          "Two is better than one",
          "",
          "F         G           C",
          "Two is better than one"
        ] }
      ]
    },
    {
      number: 5,
      title: "Jeepney",
      artist: "Kala",
      key: "A",
      keyNote: "A minor",
      minor: true,
      sections: [
        { label: "Intro", lines: [
          "FM7 Em7 Am7 (4x)"
        ] },
        { label: "Verse 1", lines: [
          "FM7              Em7",
          "Excuse me miss.. mawalang galang na",
          "       Am7",
          "Kanina pa kita kasi napapansin",
          "                   FM7",
          "Magkakilala ba tayo",
          "                   Em7 Am7",
          "Ay hindi pasensiya na, ooohhh",
          "",
          "FM7              Em7                      Am7",
          "Excuse me miss ako ulit, nangungulit lang po, yeah",
          "                         FM7",
          "Ang ganda mo palang tumawa",
          "                     Em7",
          "Pwede bang magpakilala",
          "Am7",
          "Magpakilala sa'yo"
        ] },
        { label: "Refrain", lines: [
          "FM7 Em7",
          "",
          "Am7                         FM7",
          "Huwag kang matakot sa'kin",
          "Em7        Am7",
          "Hindi ako multo",
          "FM7            Em7",
          "Kung ayaw mo, ok lang",
          "Am7                 G        Gm7",
          "Pasuyo na lang ng bayad ko, bayad ko.."
        ] },
        { label: "Chorus", lines: [
          "FM7   Em7 Am7                   C",
          "Sukob na, konti na lang at aandar na ang ating jeepney",
          "FM7      Em7             Am7                  C",
          "Sandaang tao ang nakasakay 'tila galit at naniniksik pa",
          "",
          "FM7 Em7 Am7                    C               C7",
          "Tara na, konti na lang at aandar na ang ating jeepney",
          "FM7         Em7               Am        C",
          "Hindi na makapag hintay umuwing kasama ka"
        ] },
        { label: "Solo", lines: [
          "FM7 Em7 Am7 (2x)"
        ] },
        { label: "Verse 2", lines: [
          "FM7              Em7",
          "Excuse me miss.. mawalang galang na",
          "       Am7",
          "Kanina pa kita kasi napapansin",
          "                   FM7",
          "Magkakilala ba tayo",
          "                   Em7 Am7",
          "Ay hindi pasensiya na, ooohhh"
        ] },
        { label: "Refrain", lines: [
          "FM7 Em7",
          "",
          "Am7                         FM7",
          "Huwag kang matakot sa'kin",
          "Em7        Am7",
          "Hindi ako multo",
          "FM7            Em7",
          "Kung ayaw mo, ok lang",
          "Am7                 G        Gm7",
          "Pasuyo na lang ng bayad ko, bayad ko.."
        ] },
        { label: "Chorus", lines: [
          "FM7   Em7 Am7                   C",
          "Sukob na, konti na lang at aandar na ang ating jeepney",
          "FM7      Em7             Am7                  C",
          "Sandaang tao ang nakasakay 'tila galit at naniniksik pa",
          "",
          "FM7 Em7 Am7                    C               C7",
          "Tara na, konti na lang at aandar na ang ating jeepney",
          "FM7         Em7               Am",
          "Hindi na makapag hintay umuwing kasama ka"
        ] },
        { label: "Solo", lines: [
          "FM7 Em7 Am7 (2x)"
        ] },
        { label: "Last Stanza", lines: [
          "FM7              Em7               Am7",
          "Hello miss, nakatingin ka na naman meron ka bang nais malaman",
          "     FM7             Em7               Am7",
          "Aba oo malapit ako doon, gusto mo teka lang, saan sa may bicutan"
        ] },
        { label: "Bridge", lines: [
          "FM7          Em7 Am7",
          "Salamat ng marami dito na ako bababa",
          "FM7                  Em7",
          "Tatawagan na lang kita",
          "",
          "                   Am7",
          "Tatawagan na lang kita",
          "                   Am7",
          "Tatawagan na lang kita"
        ] },
        { label: "Chorus", lines: [
          "FM7   Em7 Am7                   C",
          "Sukob na, konti na lang at aandar na ang ating jeepney",
          "FM7      Em7             Am7                  C",
          "Sandaang tao ang nakasakay 'tila galit at naniniksik pa",
          "",
          "FM7 Em7 Am7                    C               C7",
          "Tara na, konti na lang at aandar na ang ating jeepney",
          "FM7         Em7               Am",
          "Hindi na makapag hintay umuwing kasama ka"
        ] },
        { label: "Outro", lines: [
          "FM7 Em7 Am7 (2x)"
        ] }
      ]
    },
    {
      number: 6,
      title: "Gusto Ko Lamang Sa Buhay",
      artist: "The Itchyworms",
      key: "D",
      sections: [
        { label: "Intro", lines: [
          "D - G - D - G"
        ] },
        { label: "Verse", lines: [
          "Bm",
          "Ayokong maghintay pa sa imposible",
          "A",
          "Ayoko ng mga romatikong sine",
          "G                                  A",
          "Ayoko nang umasa pa sa walang silbi",
          "",
          "Bm",
          "Ayokong tumawid pag pinagbabawal",
          "A",
          "Ayoko ng kapeng maraming asukal",
          "G                                   A",
          "Ayokong bumili ng underwear na mahal"
        ] },
        { label: "Chorus", lines: [
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "A               Bm",
          "Hindi naman ako milyonaryo",
          "A                 Bm",
          "Basta't araw-araw yakap mo ko",
          "G",
          "Feeling ko ang yaman yaman ko",
          "",
          "D - G - D - G"
        ] },
        { label: "Verse", lines: [
          "Bm",
          "Ok lang kung 'di maging presidente",
          "A",
          "Ok lang kung mawalan ng kuryente",
          "G                                       A",
          "Ok lang kung ang bumbilya'y walang sindi",
          "",
          "Bm",
          "Ok lang kung ketchup lamang ang ulam",
          "A",
          "Ang gulay ay hindi naman kailangan",
          "G                                           A",
          "Basta't sa sandwich mo ako ang iyong palaman"
        ] },
        { label: "Chorus", lines: [
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "A               Bm",
          "Hindi naman ako milyonaryo",
          "A                 Bm",
          "Basta't araw-araw yakap mo ko",
          "G                          D",
          "Feeling ko ang yaman yaman ko",
          "G",
          "Feeling ko ang yaman yaman ko",
          "",
          "D - G"
        ] },
        { label: "Bridge", lines: [
          "Bb",
          "Ang dami ko pang sinabi",
          "Bb",
          "Tungkol sa aking sarili",
          "F",
          "Lahat ng yun 'di na bale",
          "F",
          "Ikaw lang ang importante",
          "",
          "Bb",
          "Yakapin mo ako",
          "",
          "Bb",
          "Lunurin sa iyo",
          "G",
          "Sa loob ng 'yong mga bisig",
          "A                         D",
          "Dama ko ang 'yong pag-ibig",
          "",
          "G             D",
          "Yakapin mo ako",
          "                            G",
          "Gusto ko lamang sa buhay ay yakapin mo ako"
        ] },
        { label: "Chorus", lines: [
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "D                             G",
          "Gusto ko lamang sa buhay ay yakapin mo ako",
          "A               Bm",
          "Hindi naman ako milyonaryo",
          "A                 Bm",
          "Basta't araw-araw yakap mo ko",
          "G                          D",
          "Feeling ko ang yaman yaman ko",
          "G",
          "Feeling ko ang yaman yaman ko"
        ] },
        { label: "Outro", lines: [
          "D - G - D - G"
        ] }
      ]
    },
    {
      number: 7,
      title: "Push",
      artist: "Matchbox Twenty",
      key: "F#",
      bpm: 84,
      note: "Written in F#. The source sheet is in G with the guitar tuned down a half step (Eb Ab Db Gb Bb Eb), which gives the same chords.",
      sections: [
        { label: "Intro", lines: [
          "F#      C#/F   D#m  Badd9        x2"
        ] },
        { label: "Verse 1", lines: [
          "         F#                     C#/F             D#m",
          "She said I don't know if I've ever been good enough...",
          "            Badd9       F#                C#/F              D#m    Badd9",
          "I'm a little bit rusty, and I think my head is caving in",
          "    F#                    C#/F               D#m",
          "And I don't know if I've ever been really loved...",
          "          Badd9               F#                  C#/F              D#m",
          "By a hand that's touched me,      and I feel like something's gonna give...",
          "                 Badd9",
          "And I'm a little bit angry"
        ] },
        { label: "Pre-Chorus 1", lines: [
          "C#sus2                             B",
          "Oh well, this ain't over no, not here,",
          "",
          "                             C#sus2",
          "not while I still need you around",
          "                              B                 C#",
          "You don't owe me, we might change, yeah we just might feel good"
        ] },
        { label: "Chorus", lines: [
          "F#         C#              Bsus2        C#",
          "   I wanna push you around, well I will, well I will",
          "F#         C#            Bsus2        C#",
          "   I wanna push you down, well I will, well I will",
          "D#m        C#                B     C#",
          "   I wanna take you for granted...",
          "D#m        C#                B            C#",
          "   I wanna take you for granted... Yeah, I will, I will"
        ] },
        { label: "Instrumental", lines: [
          "F#  C#/F    D#m  Badd9   x2"
        ] },
        { label: "Verse 2", lines: [
          "         F#                     C#/F            D#m",
          "She said I don't know why you ever would lie to me...",
          "           Badd9              F#                   C#/F              D#m    Badd9",
          "Like I'm a little untrusting, when I think that the truth is gonna hurt ya",
          "    F#                    C#/F           D#m",
          "And I don't know why you couldn't just stay with me...",
          "                          Badd9      F#              C#/F            D#m",
          "You couldn't stand to be near me, when my face don't seem to want to shine,",
          "                    Badd9",
          "cause it's a little bit dirty"
        ] },
        { label: "Pre-Chorus 2", lines: [
          "C#sus2                                         B",
          "Oh well, don't just stand there and say nice things to me",
          "                                  C#sus2",
          "I've been cheated, I've been wronged and you",
          "                                B",
          "You don't owe me, yeah well I can't change,",
          "            C#",
          "I won't do anything at all..."
        ] },
        { label: "Chorus", lines: [
          "F#        C#              Bsus2        C#",
          "  I wanna push you around, well I will, well I will",
          "F#        C#            Bsus2        C#",
          "  I wanna push you down, well I will, well I will",
          "",
          "D#m        C#                B     C#",
          "   I wanna take you for granted...",
          "D#m        C#                B           C#",
          "   I wanna take you for granted... Yeah, I will, I will"
        ] },
        { label: "Bridge", lines: [
          "D#m                  C#/F     B                     C#                      D#m",
          "   Oh, but don't bowl me over, just wait a minute, well it kind of fell apart",
          "         C#/F B       B",
          "Things get so crazy, crazy",
          "D#m             C#/F Badd9 C#",
          "    Don't rush this baby,",
          "D#m            C#/F Badd9 C#",
          "    don't rush this baby, baby..."
        ] },
        { label: "Chorus", lines: [
          "F#          C#               Bsus2       C#",
          "   I wanna push you around, well I will, well I will",
          "F#          C#             Bsus2       C#",
          "   I wanna push you down, well I will, well I will",
          "D#m         C#                  B    C#",
          "   I wanna take you for granted...     yeah yeah yeah",
          "D#m         C#         B          C#",
          "   I wanna take you, take you, yeah well I will",
          "F#       C#/F       D#m     B",
          "   I will     I will I will, yeah",
          "F#       C#/F       D#m      B",
          "   I will     I will I will, yeah",
          "F#   C#/F         D#m         B",
          "     Push you around, drag you down",
          "F#          C#/F         D#m   B",
          "   I wanna push you around",
          "          F#",
          "Yeah, I will"
        ] }
      ]
    },
    {
      number: 8,
      title: "Ligaya",
      artist: "Eraserheads",
      key: "A",
      sections: [
        { label: "Intro", lines: [
          "A       D",
          "A       D"
        ] },
        { label: "Verse 1", lines: [
          " A                              D",
          "Ilang awit pa ba ang aawitin, o giliw ko?",
          " A                            D",
          "Ilang ulit pa bang uulitin, o giliw ko?",
          "        Bm                    E",
          "Tatlong oras na akong nagpapa-cute sa'yo",
          "           C#m                       F#m E     D",
          "'Di mo man lang napapansin ang bagon T - shirt ko"
        ] },
        { label: "Verse 2", lines: [
          " A                               D",
          "Ilang isaw pa ba ang kakainin, o giliw ko?",
          " A                                D",
          "Ilang tansan pa ba ang iipunin, o giliw ko?",
          "    Bm                        E",
          "Gagawin ko ang lahat pati ang thesis mo",
          "         C#m                   F#m E   D",
          "Huwag mo lang ipagkait ang hinaha -nap ko"
        ] },
        { label: "Refrain", lines: [
          "   D N.C.                    F#m N.C.",
          "Sagutin mo lang ako aking sinta'y",
          "",
          "Walang humpay na...."
        ] },
        { label: "Chorus", lines: [
          "    C        F             C",
          "Ligaya at asahang iibigin ka",
          "       F                   C",
          "Sa tanghali, sa gabi at umaga",
          "          F                     E",
          "Huwag ka sanang magtanong at magduda",
          "           F                     E",
          "Dahil ang puso ko'y walang pangamba",
          "         F                    E        G",
          "Lahat tayo'y mabubuhay ng tahimik at buong...",
          "    C       D E",
          "Ligaya"
        ] },
        { label: "Adlib", lines: [
          "A D",
          "A D",
          "Bm E C#m F#m E D"
        ] },
        { label: "3rd Stanza", lines: [
          "// Same chords as the 1st stanza",
          "",
          " A                              D",
          "Ilang ahit pa ba ang aahitin, o giliw ko?",
          " A                                 D",
          "Ilang hirit pa ba ang hihiritin, o giliw ko?",
          "      Bm                     E",
          "'Di naman ako manyakis tulad ng iba",
          "      C#m                  F#m E     D",
          "Pinapangako ko sa'yo na igaga- lang ka."
        ] },
        { label: "Refrain", lines: [
          "   D N.C.                    F#m N.C.",
          "Sagutin mo lang ako aking sinta'y",
          "",
          "Walang humpay na...."
        ] },
        { label: "Chorus", lines: [
          "    C      F               C",
          "Ligaya at asahang iibigin ka",
          "       F                   C",
          "Sa tanghali, sa gabi at umaga",
          "         F                      E",
          "Huwag ka sanang magtanong at magduda",
          "",
          "          F                      E",
          "Dahil ang puso ko'y walang pangamba",
          "        F                     E        G",
          "Lahat tayo'y mabubuhay ng tahimik at buong...",
          "",
          "    C        F             C",
          "Ligaya at asahang iibigin ka",
          "       F                   C",
          "Sa tanghali, sa gabi at umaga",
          "          F                     E",
          "Huwag ka sanang magtanong at magduda",
          "           F                     E",
          "Dahil ang puso ko'y walang pangamba",
          "         F                    E        G",
          "Lahat tayo'y mabubuhay ng tahimik at buong...",
          "    C       D",
          "Ligaya",
          "",
          "    C        F             C",
          "Ligaya at asahang iibigin ka",
          "       F                   C",
          "Sa tanghali, sa gabi at umaga",
          "          F                     E",
          "Huwag ka sanang magtanong at magduda",
          "           F                     E",
          "Dahil ang puso ko'y walang pangamba",
          "         F                    E        G",
          "Lahat tayo'y mabubuhay ng tahimik at buong...",
          "    C       D E",
          "Ligaya"
        ] }
      ]
    },
    {
      number: 9,
      title: "Mahal Magmahal",
      artist: "Esremborak",
      key: "G",
      sections: [
        { label: "Intro", lines: [
          "G C G C"
        ] },
        { label: "Verse 1", lines: [
          "G                  C",
          "Kayang-kaya kitang pangitiin",
          "G             Am          C",
          "Ipapangako sa 'yo ang bituin",
          "G                          Am",
          "Bitawan ang katagang \"'Di kita iiwan\"",
          "G                C",
          "Panghawakang sasamahan kailan man"
        ] },
        { label: "Pre-Chorus 1", lines: [
          "        Am",
          "Ngunit saka na lang pakakawalan",
          " G                D",
          "Kung may sigurado na sa kawalan",
          " Am",
          "Mahal ngayon ang magmahal",
          " C             D",
          "Mahal kita, pero mahal"
        ] },
        { label: "Chorus", lines: [
          "G",
          "Mahal na ang bigas",
          "       C",
          "Pati lata ng sardinas",
          "          Am",
          "Kung mamahalin kita ngayon",
          "   C",
          "Sabay tayong magugutom",
          "     G",
          "'Di sapat ang sahod ko",
          "        C",
          "Kahit tapat ako sa 'yo",
          "        Am",
          "Anong silbi nitong pagmamahal",
          "       C",
          "Kung lahat din ay nagmamahal?",
          "",
          " Am                      C",
          "Ayoko lang namang makita kang",
          " Am                        C",
          "Kinikilig habang sa hirap ay nagdurusa",
          "",
          "G C G C"
        ] },
        { label: "Verse 2", lines: [
          "G                   C",
          "Kung nalulungkot ay pupuntahan ka",
          "G                        C",
          "Dala ang cravings mo na fries at matcha",
          "G                   C",
          "Sasamahan kang mag-macchiato",
          "G                    C",
          "Tapos itatanong kung bet mo ba ako"
        ] },
        { label: "Pre-Chorus 2", lines: [
          "       Am",
          "Ngunit saka na lang kita bibilhan",
          "      G            D",
          "Kung may sigurado na sa dahilan",
          "  Am",
          "Mahal kita, mahal nga lang",
          "   C           D",
          "Mahal kita, mahal din ang"
        ] },
        { label: "Chorus", lines: [
          "G",
          "Mahal na ang bigas",
          "       C",
          "Pati lata ng sardinas",
          "        Am",
          "Kung mamahalin kita ngayon",
          "   C",
          "Sabay tayong magugutom",
          "     G",
          "'Di sapat ang sahod ko",
          "        C",
          "Kahit tapat ako sa 'yo",
          "          Am",
          "Anong silbi nitong pagmamahal",
          "          C",
          "Kung lahat din ay nagmamahal?",
          "Am                       C",
          "Ayoko lang namang makita kang",
          "Am                         C",
          "Kinikilig habang sa hirap ay",
          "",
          "G C G C",
          "G C G C",
          "",
          "G C G C"
        ] },
        { label: "Chorus", lines: [
          "G",
          "Mahal na ang bigas",
          "       C",
          "Pati lata ng sardinas",
          "       Am",
          "Kung mamahalin kita ngayon",
          "   C",
          "Sabay tayong magugutom",
          "      G",
          "'Di sapat ang sahod ko",
          "          C",
          "Kahit tapat ako sa 'yo",
          "       Am",
          "Anong silbi nitong pagmamahal",
          "      C",
          "Kung lahat din ay nagmamahal?"
        ] }
      ]
    },
    {
      number: 10,
      title: "The Only Exception",
      artist: "Paramore",
      key: "B",
      bpm: 69,
      note: "Source sheet: capo 4th fret; Aadd#11 = 13320x.",
      sections: [
        { label: "Intro", lines: [
          "B B F#m Emaj7                x2"
        ] },
        { label: "Verse 1", lines: [
          "B                                 F#m                    Emaj7",
          "When I was younger I saw my daddy cry and curse at the wind",
          "   B                                                F#m         Emaj7",
          "He broke his own heart and I watched as he tried to re-assemble it",
          "     B                                     F#m        Emaj7",
          "And my mama swore that she would never let herself forget",
          "     B                                                  F#m",
          "And that was the day that I promised I'd never sing of love",
          "                Emaj7",
          "if it does not exist, but darling"
        ] },
        { label: "Chorus", lines: [
          "B",
          "You are the only exception",
          "F#m         Emaj7",
          "You are the only exception",
          "B",
          "You are the only exception",
          "F#m         Emaj7          B",
          "You are the only exception"
        ] },
        { label: "Verse 2", lines: [
          "B                                 F#m                  Emaj7",
          "Maybe I know somewhere deep in my soul that love never lasts",
          "    B                                         F#m                    Emaj7",
          "And we've got to find other ways to make it alone or keep a straight face",
          "    B                                        F#m       Emaj7",
          "And I've always lived like this, keeping a comfortable distance",
          "    B                                              F#m             Emaj7",
          "And up until now I had sworn to myself that I'm content with loneliness",
          "",
          "Because none of it was ever worth the risk"
        ] },
        { label: "Chorus", lines: [
          "      B",
          "Well, you are the only exception",
          "F#m         Emaj7",
          "You are the only exception",
          "B",
          "You are the only exception",
          "F#m         Emaj7       C#m",
          "You are the only exception"
        ] },
        { label: "Instrumental", lines: [
          "(C#m) C#m B F#",
          " C#m C#m B F#"
        ] },
        { label: "Bridge", lines: [
          "           C#m",
          "I've got a tight grip on reality, but I can't",
          "    B                           F#",
          "Let go of what's in front of me here",
          "              C#m",
          "I know you're leaving in the morning when you wake up",
          "         B                                  F#        E",
          "Leave me with some kind of proof it's not a dream, whoa"
        ] },
        { label: "Chorus", lines: [
          "B",
          "You are the only exception",
          "F#m         Emaj7",
          "You are the only exception",
          "B",
          "You are the only exception",
          "F#m         Emaj7",
          "You are the only exception",
          "",
          "B",
          "You are the only exception",
          "F#m         Emaj7",
          "You are the only exception",
          "B",
          "You are the only exception",
          "F#m         Emaj7",
          "You are the only exception"
        ] },
        { label: "Outro", lines: [
          "    Aadd#11   E              B",
          "And I'm on my way to believing",
          "        Aadd#11   E              B",
          "Oh, and I'm on my way to believing"
        ] }
      ]
    },
    {
      number: 11,
      title: "I Think God Can Explain",
      artist: "Splender",
      key: "Bb",
      note: "Written in Bb. The source sheet is in G with capo 2nd fret (which sounds in A); capo 3 with the G shapes gives these chords.",
      sections: [
        { label: "Intro", lines: [
          "Ebadd9 - F - Gm"
        ] },
        { label: "Verse 1", lines: [
          "Ebadd9            F                 Gm",
          "There's a lot of things I understand",
          "Ebadd9                     F",
          "And there's a lot of things that",
          "Gm     - F/A  - Bb (quick transition)",
          "I don't want to know",
          "Ebadd9                          F              Gm",
          "But you're the only face I recognize",
          "Ebadd9                          F",
          "It's so damn sweet of you",
          "Gm     - F/A  - Bb",
          "to look me in the eyes"
        ] },
        { label: "Chorus", lines: [
          "Cm               F",
          "It's alright, I'm O.K.",
          "Bb               Bb/Eb      - Bb/D (quick transition)",
          "I think God can explain",
          "Cm       F",
          "I believe I'm the same",
          "Bb       Bb/Eb       - Bb/D",
          "I get carried away",
          "Cm           F",
          "It's alright, I'm O.K.",
          "Bb               Bb/Eb      - Bb/D",
          "I think God can explain",
          "Cm       F",
          "I'm relieved I'm relaxed",
          "Bb       Bb/Eb       - Bb/D",
          "I'll get over it yet"
        ] },
        { label: "Verse 2", lines: [
          "Ebadd9           F",
          "The scent of vaseline",
          "Gm",
          "in the summertime",
          "Ebadd9                  F",
          "The feel of an ice cube",
          "Gm - F/A             - Bb",
          "Melting overtime",
          "Ebadd9                 F",
          "The world seems bigger",
          "Gm",
          "Than both of us",
          "Ebadd9                        F",
          "Yet it seems so small",
          "Gm - F/A             - Bb",
          "when I begin to cry"
        ] },
        { label: "Chorus", lines: [
          "Cm               F",
          "It's alright, I'm O.K.",
          "Bb               Bb/Eb     - Bb/D (quick transition)",
          "I think God can explain",
          "Cm       F",
          "I believe I'm the same",
          "Bb       Bb/Eb   - Bb/D",
          "I get carried away",
          "Cm           F",
          "It's alright, I'm O.K.",
          "Bb               Bb/Eb     - Bb/D",
          "I think God can explain",
          "Cm       F",
          "I'm relieved I'm relaxed",
          "Bb       Bb/Eb - Bb/D         Ab",
          "I'll get over it yet"
        ] },
        { label: "Bridge", lines: [
          "Bb                                Ab",
          "I'm so much better than you guessed",
          "Bb                                Ab",
          "I'm so much bigger than you guessed",
          "Bb                                Ab",
          "I'm so much brighter than you guessed",
          "Eb - Eb/D - Cm - Bb - Ab Ab Ab Ab"
        ] },
        { label: "Chorus", lines: [
          "Cm             F",
          "It's alright, I'm O.K.",
          "Bb             Bb/Eb - Bb/D (quick transition)",
          "I think God can explain",
          "Cm       F",
          "I believe I'm the same",
          "Bb       Bb/Eb - Bb/D",
          "I get carried away",
          "Cm          F",
          "It's alright, I'm O.K.",
          "Bb              Bb/Eb   - Bb/D",
          "I think God can explain",
          "Cm      F",
          "I'm relieved I'm relaxed",
          "Bb       Bb/Eb      - Bb/D",
          "I'll get off of your back"
        ] },
        { label: "Ending Chorus", lines: [
          "Ebadd9          F               Gm",
          "I think God can explain",
          "Ebadd9          F               Gm",
          "I think God can explain",
          "Ebadd9          F",
          "I think God can explain"
        ] },
        { label: "End", lines: [
          "Eb - Eb/D - Cm - Bb - Ab"
        ] }
      ]
    },
    {
      number: 12,
      title: "Lips of an Angel",
      artist: "Hinder",
      key: "D",
      bpm: 64,
      sections: [
        { label: "Verse 1", lines: [
          "A              Bm        G   D",
          "Honey, why you callin' me so late",
          "A                  Bm         G   D",
          "It's kinda hard to talk right now",
          "A              Bm             G       D",
          "Honey, why you cryin'? Is everything ok?",
          "A                       Bm           G",
          "I gotta whisper cause I can't be too loud"
        ] },
        { label: "Pre-Chorus", lines: [
          "      D            A",
          "Well, my girl's in the next room",
          "Bm          G",
          "Sometimes I wish she was you",
          "D          A            Bm     G",
          "I guess we never really moved on"
        ] },
        { label: "Chorus", lines: [
          "                    D",
          "It's really good to hear your voice",
          "",
          "A",
          "Sayin' my name",
          "   Cadd9     G",
          "It sounds so sweet",
          "                D",
          "Comin' from the lips of an angel",
          "A",
          "Hearin' those words",
          "   Cadd9            G",
          "It makes me weak",
          "    Bm",
          "And I",
          "                        A",
          "Never want to say goodbye",
          "                     Em              F#m    G",
          "But girl you make it hard to be faithful",
          "",
          "With the lips of an angel",
          "",
          "Bm   A   G"
        ] },
        { label: "Verse 2", lines: [
          "A                       Bm         G D",
          "It's funny that you're callin' me tonight",
          "A           Bm             G    D",
          "And yes, I dreamt of you too",
          "A                    Bm            G",
          "Does he know you're talkin' to me?",
          "        D",
          "Will it start a fight?",
          "A                 Bm         G",
          "No, I don't think she has a clue"
        ] },
        { label: "Pre-Chorus", lines: [
          "    D             A",
          "Well, my girl's in the next room",
          "Bm          G",
          "Sometimes I wish she was you",
          "D          A            Bm     G",
          "I guess we never really moved on"
        ] },
        { label: "Chorus", lines: [
          "                    D",
          "It's really good to hear your voice",
          "A",
          "Sayin' my name",
          "   Cadd9              G",
          "It sounds so sweet",
          "                D",
          "Comin' from the lips of an angel",
          "",
          "A",
          "Hearin' those words",
          "   Cadd9            G",
          "It makes me weak",
          "    Bm",
          "And I",
          "                        A",
          "Never want to say goodbye",
          "                     Em              F#m   G",
          "But girl you make it hard to be faithful",
          "",
          "With the lips of an angel"
        ] },
        { label: "Break: Solo", lines: [
          "F   C   D   (x4)"
        ] },
        { label: "Chorus/Outro", lines: [
          "                    D",
          "It's really good to hear your voice",
          "A",
          "Sayin' my name",
          "   Cadd9              G",
          "It sounds so sweet",
          "                D",
          "Comin' from the lips of an angel",
          "A",
          "Hearin' those words",
          "   Cadd9            G",
          "It makes me weak",
          "    Bm",
          "And I",
          "                       A",
          "Never want to say goodbye",
          "                     Em              F#m G",
          "But girl you make it hard to be faithful",
          "                           (strum: A Bm G      D)",
          "With the lips of an angel",
          "A      Bm       G   D",
          "Honey, why you callin' me so late?"
        ] }
      ]
    },
    {
      number: 13,
      title: "Bakit Part 2",
      artist: "Mayonnaise",
      key: "Eb",
      note: "Written in Eb. The source sheet is in E with the guitar tuned down a half step (Eb Ab Db Gb Bb Eb), which gives the same chords.",
      sections: [
        { label: "Intro", lines: [
          "Eb Absus2   Cm    Bb"
        ] },
        { label: "Verse", lines: [
          "Eb         Absus2",
          "  Lumuha kang nag-iisa",
          "Cm                 Bb",
          "  Nakadungaw sa buwan",
          "Eb       Absus2",
          "  Lumilipad ang isip ko",
          "Cm               Bb",
          "  Nakasabit sa ulap"
        ] },
        { label: "Pre-Chorus", lines: [
          "        Absus2",
          "Ngunit bakit pinilit",
          "      Fm7          Absus2 Bb",
          "Kung ayaw kong masaktan"
        ] },
        { label: "Chorus", lines: [
          "   Eb       Fm",
          "Sinabi ko sa kanya",
          "   Gm            Fm",
          "Na di pa rin nililikha",
          "     Eb           Fm",
          "Ang tulad kong parang timang",
          "   Gm           Fm",
          "Na di pa rin maintindihan"
        ] },
        { label: "Verse 2", lines: [
          "Eb        Absus2",
          "  Malayo ang pagtitig ko",
          "Cm           Bb",
          "  Dala ng hangin",
          "Eb      Absus2          Cm         Bb",
          "  Akala ko ay pwede pang umasa sa 'yo"
        ] },
        { label: "Pre-Chorus", lines: [
          "        Absus2",
          "Ngunit bakit pinilit",
          "     Fm7           Absus2 Bb",
          "Kung ayaw kong masaktan"
        ] },
        { label: "Chorus", lines: [
          "   Eb       Fm",
          "Sinabi ko sa kanya",
          "   Gm            Fm",
          "Na di pa rin nililikha",
          "     Eb           Fm",
          "Ang tulad kong parang timang",
          "   Gm           Fm",
          "Na di pa rin maintindihan"
        ] },
        { label: "Instrumental", lines: [
          "Cm    Bb  x2"
        ] },
        { label: "Bridge", lines: [
          "   Cm            Bb",
          "O bakit ba pag wala ka na",
          "         Absus2      Bb",
          "Ako'y kulang, ako'y kulang"
        ] },
        { label: "Chorus", lines: [
          "   Eb       Fm",
          "Sinabi ko sa kanya",
          "   Gm            Fm",
          "Na di pa rin nililikha",
          "     Eb           Fm",
          "Ang tulad kong parang timang",
          "   Gm           Fm",
          "Na di pa rin maintindihan"
        ] },
        { label: "Coda", lines: [
          "Eb Fm    Gm    Fm"
        ] }
      ]
    },
    {
      number: 14,
      title: "Over You",
      artist: "Daughtry",
      key: "Eb",
      note: "Written in Eb. The source sheet is in D with capo 1st fret, which gives the same chords.",
      sections: [
        { label: "Verse 1", lines: [
          "Eb                              Bb",
          "  Now that it's all said and done,",
          "                             Cm",
          "I can't believe you were the one",
          "             Bb              Ab",
          "To build me up and tear me down,",
          "",
          "Like an old abandoned house.",
          "Eb                          Bb",
          "  What you said when you left",
          "                              Cm",
          "Just left me cold and out of breath.",
          "            Bb                   F7",
          "I fell too far, was in way too deep.",
          "                         Ab      Bb",
          "Guess I let you get the best of me."
        ] },
        { label: "Chorus", lines: [
          "         Eb",
          "Well, I never saw it coming.",
          "",
          "I should've started running",
          "   Bb",
          "A long, long time ago.",
          "        Cm",
          "And I never thought I'd doubt you,",
          "      Bb",
          "I'm better off without you",
          " Ab                          Bb",
          "More than you, more than you know.",
          "     Eb",
          "I'm slowly getting closure.",
          "",
          "I guess it's really over.",
          "",
          "     Bb",
          "I'm finally getting better.",
          "            Cm",
          "And now I'm picking up the pieces.",
          "     Bb",
          "I'm spending all of these years",
          " Ab                     Bb",
          "Putting my heart back together.",
          "           F7                             Ab",
          "'Cause the day I thought I'd never get through,",
          "      Bb   N.C.",
          "I got over you."
        ] },
        { label: "Interlude", lines: [
          "Eb   B      Db"
        ] },
        { label: "Verse 2", lines: [
          "Eb                            Bb",
          " You took a hammer to these walls,",
          "                              Cm",
          "Dragged the memories down the hall,",
          "            Bb               Ab",
          "Packed your bags and walked away.",
          "",
          "There was nothing I could say.",
          "Eb                                      Bb",
          "  And when you slammed the front door shut,",
          "                       Cm",
          "A lot of others opened up,",
          "          Bb              F7",
          "So did my eyes so I could see",
          "                        Ab        Bb",
          "That you never were the best for me."
        ] },
        { label: "Chorus", lines: [
          "         Eb",
          "Well, I never saw it coming.",
          "",
          "I should've started running",
          "   Bb",
          "A long, long time ago.",
          "        Cm",
          "And I never thought I'd doubt you,",
          "      Bb",
          "I'm better off without you",
          " Ab                          Bb",
          "More than you, more than you know.",
          "     Eb",
          "I'm slowly getting closure.",
          "",
          "I guess it's really over.",
          "     Bb",
          "I'm finally getting better.",
          "            Cm",
          "And now I'm picking up the pieces.",
          "     Bb",
          "I'm spending all of these years",
          " Ab                     Bb",
          "Putting my heart back together.",
          "           F7                             Ab",
          "'Cause the day I thought I'd never get through,",
          "      Bb",
          "I got over you."
        ] },
        { label: "Solo", lines: [
          "Eb   B     Db  F7   Ab  Bb"
        ] },
        { label: "Chorus", lines: [
          "         Eb",
          "Well, I never saw it coming.",
          "",
          "I should've started running",
          "   Bb",
          "A long, long time ago.",
          "       Cm",
          "And I never thought I'd doubt you,",
          "     Bb",
          "I'm better off without you",
          " Ab",
          "More than you, more than you know.",
          "",
          "         Eb",
          "Well, I never saw it coming.",
          "",
          "I should've started running",
          "   Bb",
          "A long, long time ago.",
          "        Cm",
          "And I never thought I'd doubt you,",
          "      Bb",
          "I'm better off without you",
          " Ab                          Bb",
          "More than you, more than you know.",
          "     Eb",
          "I'm slowly getting closure.",
          "",
          "I guess it's really over.",
          "     Bb",
          "I'm finally getting better.",
          "            Cm",
          "And now I'm picking up the pieces.",
          "",
          "     Bb",
          "I'm spending all of these years",
          " Ab",
          "Putting my heart back together."
        ] },
        { label: "Outro", lines: [
          "Eb",
          "Whoa oh ah oh",
          "           Bb",
          "Well, I'm putting my heart back together,",
          "Cm     Bb",
          "Whoa oh ah oh",
          "Ab",
          "   'Cause I got over you.",
          "Eb",
          "Whoa oh ah oh",
          "Bb",
          "   Well, I got over you.",
          "Cm     Bb",
          "Whoa oh ah oh",
          "       Ab",
          "I got over you.",
          "             F7                           Ab",
          "'Cause the day I thought I'd never get through,",
          "       Bb N.C.",
          "I got over you."
        ] }
      ]
    },
    {
      number: 15,
      title: "Jet Lag",
      artist: "Simple Plan",
      key: "B",
      sections: [
        { label: "Intro", lines: [
          "B     F#        E",
          "Ohh, ohhh",
          "",
          "B     F#        E",
          "Ohh, ohhh",
          "",
          "So jet-lagged."
        ] },
        { label: "Verse 1", lines: [
          "B                          E",
          "What time is it where you are?",
          "",
          "I miss you more than anything",
          "B                         E",
          "Back at home you feel so far",
          "",
          "Waiting for the phone to ring"
        ] },
        { label: "Pre-chorus", lines: [
          "G#m",
          "It's getting lonely living upside down",
          "E",
          "I don't even wanna be in this town",
          "",
          "G#m                                  F#",
          "Trying to figure out the time zones making me crazy"
        ] },
        { label: "Chorus", lines: [
          "                  B",
          "You say good morning",
          "             E",
          "When it's midnight",
          "       G#m",
          "Going out of my head",
          "F#",
          "Alone in this bed",
          "     B               E",
          "I wake up to your sunset",
          "G#m",
          "It's driving me mad",
          "    F#",
          "I miss you so bad",
          "         B     B       E",
          "And my heart heart, heart is so jet lagged",
          "   G#m   G#m        F#",
          "Heart heart, heart is so jet lagged",
          "   B    B        E                  G#m    F#",
          "Heart heart, heart is so jet lagged",
          "",
          "So jet lagged"
        ] },
        { label: "Intro", lines: [
          "B     F#    E",
          "Ohh, ohh"
        ] },
        { label: "Verse 2", lines: [
          "B                         E",
          "What time is it where you are?",
          "",
          "5 more days and I'll be home",
          "B                           E",
          "I keep your picture in my car",
          "",
          "I hate the thought of you alone"
        ] },
        { label: "Pre-chorus", lines: [
          "G#m",
          "I've been keeping busy all the time",
          "E",
          "Just to try to keep you off my mind",
          "G#m                                  F#",
          "Trying to figure out the time zones making me crazy"
        ] },
        { label: "Chorus", lines: [
          "                B",
          "You say good morning",
          "           E",
          "When it's midnight",
          "      G#m",
          "Going out of my head",
          "F#",
          "Alone in this bed",
          "      B             E",
          "I wake up to your sunset",
          "             G#m",
          "And it's driving me mad",
          "    F#",
          "I miss you so bad",
          "         B        B   E",
          "And my heart heart, heart is so jet lagged",
          "G#m     G#m      F#",
          "Heart heart, heart is so jet lagged",
          "B        B        E                    G#m G#m   F#",
          "Heart heart, heart is so jet lagged",
          "",
          "So jet lagged",
          "",
          "B",
          "Ohh, ohhh",
          "E",
          "Ohh, ohhh"
        ] },
        { label: "Bridge", lines: [
          "B",
          "I miss you so bad (I miss you so bad)",
          "E",
          "I miss you so bad (I miss you so bad)",
          "B",
          "I miss you so bad (I wanna share your horizon)",
          "E",
          "I miss you so bad (And see the same sun rising)",
          "B                                                 E",
          "I miss you so bad (And turn the hour hand back to when you were holding me)"
        ] },
        { label: "Chorus", lines: [
          "You say good morning",
          "",
          "When it's midnight",
          "G#m",
          "Going out of my head",
          "F#",
          "Alone in this bed",
          "",
          "    B               E",
          "I wake up to your sunset",
          "            G#m",
          "And it's driving me mad,",
          "F#",
          "I miss when",
          "              B",
          "You say good morning",
          "            E",
          "But it's midnight",
          "        G#m",
          "Going out of my head",
          " F#",
          "Alone in this bed",
          "      B             E",
          "I wake up to your sunset",
          "            G#m",
          "And it's driving me mad",
          " F#",
          "I miss you so bad",
          "          B     B     E",
          "And my heart heart, heart is so jet lagged",
          "   G#m G#m      F#",
          "Heart heart, heart is so jet lagged",
          "   B     B        E                   G#m G#m   F#",
          "Heart heart, heart is so jet lagged",
          "",
          "So jet lagged",
          " B    F# E",
          "Ohh, ohhh (so jet lagged)"
        ] }
      ]
    },
    {
      number: 16,
      title: "Aurora Sunrise",
      artist: "FRANCO",
      key: "Db",
      bpm: 81,
      sections: [
        { label: "Intro", lines: [
          "Ab Gb Ab Gb Ab Gb Fm Ab7",
          "",
          "Ab Fm Gb Ab"
        ] },
        { label: "Verse", lines: [
          "Gb            Ab     Ab7",
          "I waited so long for this time",
          "Ab          F7      Fm Ab",
          "I want to turn with the tides",
          "                 Ab",
          "My waiting so long is over",
          "         F7 Gb",
          "This is our time",
          "Db7     Bb7",
          "Fear I want Run with love",
          "Bb7",
          "Fear I want sit back relax",
          "        Db7",
          "Fear I want rock your boat",
          "         Eb7                Ab",
          "Still I fear i'll come rock you"
        ] },
        { label: "Chorus", lines: [
          "         Gb     Db      Ab",
          "I wanted to see Sunrise",
          "Bbm      Gb      Db        Ab",
          "I wanted to feel sunlight",
          "Bbm         Gb      Db     Ab",
          "I waited to be with ocean waves",
          "",
          "      Gb",
          "Again again",
          "Db Ab Gb Ab Gb Ab Gb Ab"
        ] },
        { label: "Verse", lines: [
          "          Ab7",
          "I feel so natural",
          "              Ab7",
          "This herb so natural",
          "Ab",
          "I'll rise all your daughters and",
          "Ab",
          "The sons of the sea",
          "Ab",
          "Obliterate uh this uh negativity",
          "                                      Gb",
          "And turn your life and your love into positivity"
        ] },
        { label: "Chorus", lines: [
          "     Fm          Gb       Ab",
          "What we say is a aere way",
          "Bbm      Gb     Db      Ab",
          "I wanted to see Sunrise",
          "Bbm      Gb      Db        Ab",
          "I wanted to feel sunlight",
          "Bbm         Gb      Db     Ab",
          "I waited to be with ocean waves",
          "Bbm   Gb",
          "Again again"
        ] },
        { label: "Solo", lines: [
          "Db Bbm Gb Fm Gb F7 Db Bbm",
          "",
          "Db F7 Gb Db Gb"
        ] },
        { label: "Chorus", lines: [
          "                Ab Db",
          "When life comes at you",
          "             Fm       Gb   Ab",
          "Receive with all your mind",
          "             Bbm Db",
          "What we have come after",
          "Db",
          "Receive it all",
          "Db",
          "Come back",
          "Gb",
          "Come back",
          "Fm",
          "Come back",
          "Ab",
          "Fear I want Run with love"
        ] },
        { label: "Verse", lines: [
          "                     Db7",
          "Fear I want sit back relax",
          "       Ab7",
          "Fear I want rock your boat",
          "                            Ab",
          "Still I fear i'll come rock you"
        ] },
        { label: "Chorus", lines: [
          "Bbm         Gb Db       Ab Bbm",
          "I wanted to see Sunrise",
          "            Gb    Db      Ab",
          "I wanted to feel sunlight",
          "Bbm            Gb      Db    Ab",
          "I'm willing to be with ocean waves",
          "Bbm   Gb    Db",
          "Again again",
          "Ab    Bbm",
          "Again again",
          "Gb    Db Ab    Bbm   Gb",
          "Again   Again again again"
        ] },
        { label: "Outro", lines: [
          "Db Bbm Db Bbm Fm Db Fm Db",
          "",
          "Bbm Fm Db Bbm Fm Db"
        ] }
      ]
    },
    {
      number: 17,
      title: "Careless Christmas with Beer",
      artist: "Medley: Careless Whisper / Christmas In Our Hearts (Jose Mari Chan) / Beer (The Itchyworms)",
      key: "G",
      sections: [
        { label: "Careless Intro", lines: [
          "Em Am C Bm x2"
        ] },
        { label: "Christmas Verse 1", lines: [
          "Em",
          "Whenever I see girls and boys",
          "          Am           B",
          "Selling lanterns on the streets",
          "      Am",
          "I remember the Child",
          "       B          Em",
          "In the manger as He sleeps",
          "Em",
          "Wherever there are people",
          "   E7                Am",
          "Giving gifts, exchanging cards",
          "       Am    Em",
          "I believe that Christmas",
          "    B               Em",
          "Is truly in their hearts"
        ] },
        { label: "Pre-chorus 1", lines: [
          "      D               G",
          "Let's light our Christmas trees",
          "  D          G",
          "For a bright tomorrow",
          "",
          "   D           G",
          "Where nations are at peace",
          "  F#           Bm D7",
          "And all are one in God"
        ] },
        { label: "Chorus", lines: [
          "   G",
          "Let's sing Merry Christmas",
          " C",
          "And a happy holiday",
          "   D",
          "This season, may we never forget",
          "               G",
          "The love we have for Jesus",
          "  G",
          "Let Him be the One to guide us",
          "   C",
          "As another new year starts",
          " D",
          "And may the spirit of Christmas",
          "   C      D      G",
          "Be always in our hearts"
        ] },
        { label: "Beer Intro", lines: [
          "G C G C Cm G F E"
        ] },
        { label: "Verse 1", lines: [
          "           Am           D7",
          "Nais kong magpakalasing",
          "         G       E",
          "Dahil wala ka na",
          "      Am             D7",
          "Nakatingin sa salamin",
          "           G G7",
          "At nag-iisa",
          "       C",
          "Nakatanim pa rin",
          "",
          "Ang gumamelang",
          "Cm                       Bm         E",
          "Binalik mo sa`kin nang tayo`y maghiwalay",
          "Am",
          "Ito`y katulad",
          "            Am7",
          "Ng damdamin ko",
          "                    Am                D7",
          "Kahit buhusan mo ng beer ayaw pang mamatay"
        ] },
        { label: "Pre-Chorus", lines: [
          "Gmaj7                       Cmaj7 Am D",
          "Giliw, wag mo sanang limutin",
          "          Bm                  C",
          "Ang mga araw na hindi sana maglaho",
          "      Bm                     C",
          "Mga anak at bahay nating pinaplano",
          "  Bm               E",
          "Lahat ng ito`y nawala",
          "       E7    Am      D",
          "Nung iniwan mo 'ko kaya ngayon"
        ] },
        { label: "Chorus", lines: [
          "C               G",
          "Ibuhos na ang beer",
          "          Em Em/F# Bm",
          "Sa aking lala mu nan",
          "C              G",
          "Upang malunod na ang",
          "       Em    Em/F# Bm",
          "Puso kong na hihi rapan",
          "  C            B7",
          "Bawat patak anong sarap",
          "     Em     Em/D           A7",
          "Ano ba talagang mas gusto ko",
          "      Am",
          "Ang beer na ito",
          "   D              G",
          "O ang pag-ibig mo"
        ] },
        { label: "Interlude", lines: [
          "G C G C Cm G F E"
        ] },
        { label: "Verse 2", lines: [
          "          Am          D",
          "Nais kong magpakasabog",
          "      G         E",
          "Dahil olats ako",
          "          Am         D",
          "Kahit ano hihithitin",
          "         G     G7",
          "Kahit tambutso",
          "         C",
          "Kukuha ako ng",
          "             Cm",
          "Beer at ipapakulo",
          "                     Bm",
          "Sa kaldero't lalanghapin",
          "",
          "           E",
          "Ang usok nito",
          "   Am",
          "lahat ay aking gagawin",
          "   Am7",
          "Upang hindi ko na isiping",
          "Am             D7",
          "Nag-iisa na ako"
        ] },
        { label: "Chorus", lines: [
          "C               G",
          "Ibuhos na ang beer",
          "          Em Em/F# Bm",
          "Sa aking lala mu nan",
          "C              G",
          "Upang malunod na ang",
          "       Em    Em/F# Bm",
          "Puso kong na hihi rapan",
          "  C            B7",
          "Bawat patak anong sarap",
          "     Em     Em/D          A7",
          "Ano ba talagang mas gusto ko",
          "      Am",
          "Ang beer na ito",
          "   D              G",
          "O ang pag-ibig mo"
        ] },
        { label: "Instrumental", lines: [
          "C Cm Bm E A7 A7 Am7 D"
        ] },
        { label: "Pre-Chorus", lines: [
          "Gmaj7                       Cmaj7 Am D",
          "Giliw, wag mo sanang limutin",
          "          Bm                  C",
          "Ang mga araw na hindi sana maglaho",
          "      Bm                     C",
          "Mga anak at bahay nating pinaplano",
          "  Bm               E",
          "Lahat ng ito`y nawala",
          "       E7    Am      D",
          "Nung iniwan mo 'ko kaya ngayon"
        ] },
        { label: "Chorus", lines: [
          "C              G",
          "Ibuhos na ang beer",
          "         Em Em/F# Bm",
          "Sa aking lala mu nan",
          "",
          "C             G",
          "Upang malunod na ang",
          "       Em   Em/F# Bm",
          "Puso kong na hihi rapan",
          "  C           B7",
          "Bawat patak anong sarap",
          "     Em    Em/D           A7",
          "Ano ba talagang mas gusto ko",
          "     Am",
          "Ang beer na ito",
          "     Bm",
          "Ang beer na ito",
          "     Cm",
          "Ang beer na ito",
          "   D            G C G C Cm G",
          "O ang pag-ibig mo"
        ] }
      ]
    }
  ];

  return SONGS;
}));
