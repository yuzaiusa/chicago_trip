# 🌆 Chicago Family Trip · 芝加哥家庭之旅

A mobile-first, **bilingual (English / 中文)** travel guide for a relaxed, senior-friendly
5-day Chicago trip (July 8–12, 2026), built for easy viewing on an iPhone. Hosted on
GitHub Pages.

## The trip
- **Wed Jul 8** — Land at O'Hare ~9am, rental car, **Northwestern University** in Evanston.
  Mom + Sarah take the admissions tour; Dad, Brooke + grandparents follow the **self-guided
  walking tour** built into the app. Check in at the Renaissance Chicago North Shore Hotel.
- **Thu Jul 9** — Day trip to **UIUC** (Urbana-Champaign). Admissions tour for Mom + Sarah;
  a flat, easy **self-guided Main Quad walk** for everyone else.
- **Fri Jul 10** — Skating camp for Mom, Sarah, Brooke. Dad + grandparents do **Millennium
  Park, a seated architecture river cruise, and the Art Institute**.
- **Sat Jul 11** — Skating camp again. Dad + grandparents do the lakefront **Museum Campus
  (Field Museum) and a Chinatown dim-sum lunch**.
- **Sun Jul 12** — Fly home.

Everything is planned **senior-friendly**: under 2 miles of walking a day, flat paths,
frequent benches, indoor/seated options, and afternoon rests.

## What it does
- **Itinerary home** → tap a day → tap a site for details.
- Each site has: intro, a richer **background story** (collapsible, with a **🔊 Listen**
  button), an **"Open in Apple Maps"** button, walking/hours facts, and a **must-see photo
  gallery**. The two campus days include a **drawn self-guided walking-tour map**.
- **Language toggle** (top-right): switches everything between 中文 and English and remembers
  your choice. Defaults to 中文.
- Large fonts and big buttons for comfortable senior reading.

## Narration (🔊 Listen)
Each background story has a Listen button that plays a pre-recorded MP3 in `assets/audio/`
(`<site-id>-en.mp3` / `<site-id>-zh.mp3`), generated with **Edge TTS** neural voices — so it
works offline on iPhone with no API keys. If the MP3 is missing, the button falls back to the
browser's built-in speech. Background stories are adapted from English Wikipedia (CC BY-SA);
each links to its source.

To regenerate audio after editing a story in `content.js`:
```bash
pip install edge-tts        # one-time
node tools/gen_audio.js     # rewrites assets/audio/*.mp3 from content.js
```

## Files
```
index.html              app shell
assets/css/styles.css   mobile-first, senior-friendly styles
assets/js/content.js    ALL trip text + map links (edit here)
assets/js/app.js        router + rendering (no build step, no dependencies)
assets/audio/           Edge-TTS narration MP3s (per site, per language)
tools/gen_audio.js      regenerates the narration from content.js
assets/img/             photos (see PHOTOS.md for filenames)
```

## Edit the trip
Open `assets/js/content.js`. Every text field is `{ en: "...", zh: "..." }`. Change wording,
add a site to `sites`, then list its id in a day's `sites` array. Map links use each site's
`coords` and `mapQuery`.

## Add photos
Drop images into `assets/img/` using the filenames in **PHOTOS.md**. Until a photo exists, a
tidy "photo coming soon" placeholder shows automatically — the site works fine without images.

## Preview locally
```bash
cd chicago_trip
python3 -m http.server 8000
# open http://localhost:8000 (use your browser's iPhone device emulation)
```

## Publish on GitHub Pages
1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Open the published URL on your iPhone. The Apple Maps buttons open the Maps app directly.
