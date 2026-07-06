# 🌆 Chicago Family Trip · 芝加哥家庭之旅

A mobile-first, **bilingual (English / 中文)** travel guide for a relaxed, senior-friendly
5-day Chicago trip (July 8–12, 2026), built for easy viewing on an iPhone. Hosted on
GitHub Pages.

## The trip
- **Wed Jul 8** — Land at O'Hare ~9am, rental car, **Northwestern University** in Evanston.
  Official campus tour 12–1pm (all but the grandparents) and the **Engineering (McCormick)
  tour** for Bridget + Sarah. The grandparents (and Brooke, during the engineering tour) wait
  at the air-conditioned **Norris University Center**. Check in at the Renaissance Chicago
  North Shore Hotel.
- **Thu Jul 9** — Day trip to **UIUC** (Urbana-Champaign): two tours (campus 10–12:30,
  engineering 1:30–3:45). Brooke + grandparents wait at the cool **Illini Union**.
- **Fri Jul 10** — Morning **University of Chicago** tour (8:30–11:30); grandparents rest at
  the hotel. Brooke + Sarah start **skating camp at 2:30**; the rest enjoy a relaxed afternoon
  at the **Chicago Botanic Garden** in Glencoe.
- **Sat Jul 11** — Booked **architecture river cruise** (arrive 9:30, sail 10–11:30), then a
  **Chinatown** dim-sum lunch and the lakefront **Field Museum / Museum Campus**.
- **Sun Jul 12** — Skating camp finishes in the afternoon; a gentle morning at the **Baha'i
  House of Worship** in Wilmette, then fly home (6pm).

Everything is planned **senior-friendly**: flat paths, frequent benches, air-conditioned
waiting spots near each tour, indoor/seated options, and afternoon rests.

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
