/*
  Bridge Recording: releases, credits and artists.
  ---------------------------------------------------------------
  THIS IS THE ONLY FILE YOU EDIT TO ADD WORK TO THE SITE.
  To feature a new client release, copy one entry in RELEASES,
  paste it at the top of the list, and change the fields.

  Fields
    id        short unique name, letters/numbers/dashes
    artist    artist or band name, exactly as credited
    title     song / release title
    kind      "Single", "EP", "Album", "Track" ... (optional)
    status    "out" (released), "upcoming", or "early" (early listen of an upcoming release)
    date      "YYYY-MM-DD" if known (optional). Shown on News.
    dateText  free text instead of a date, e.g. "Coming soon" (optional)
    credit    the credit line, e.g. "Mixed & Mastered by Bridge Recording"
    credit2   optional second credit line, e.g. "In collaboration with DJ V12Kid"
    group     "client"  = work for other artists
              "label"   = GLASS CANONS / StormJarl / Kilynn Ross releases
    audio     path to an mp3 in assets/audio/ (optional, keep under ~10 MB)
    cover     path to a square image in assets/img/ (optional)
    blurb     one or two friendly sentences (optional)
    links     list of { label, url } streaming / video links (optional)
    featured  true = also show on the Home page (optional)
    cover2x   larger version of the cover for sharp screens (optional)
    alt       short description of the art for people using screen readers (optional)
    coverAspect  "4/5" for portrait art such as teasers (default square)
    tracks    list of { n, title, cover } shown as a small track grid on News (optional)
    stream    streaming links shown as a "Listen on" row (label releases) or "Stream the release" row (client work):
              { spotify: { url }, apple: { url }, youtube: { url }, amazon: { url } } in that order.
              Add level: "album" for EP/album pages, level: "artist" for an artist-page fallback (labelled as such).
              Leave out a platform with no verified link; null or missing = no row.
              Optional title / artist inside stream: the platform's song title / artist when it differs from the tile.
    presave   pre-save / smart link URL. Leave "" until it exists (nothing shows while empty)
*/
window.BR_RELEASES = [
  // ---------- Early listen ----------
  {
    id: "level-up-v12kid", artist: "StormJarl", title: "Level Up (V12Kid)", kind: "Early listen",
    status: "early", dateText: "Level Up EP out November 20, 2026 (tentative)",
    credit: "Mixed and Mastered by Bridge Recording", credit2: "In collaboration with DJ V12Kid", group: "label",
    audio: "assets/audio/stormjarl-level-up-v12kid-mix.mp3",
    cover: "assets/img/stormjarl-level-up-v12kid-600.webp", cover2x: "assets/img/stormjarl-level-up-v12kid-1080.webp", coverAspect: "4/5",
    alt: "Level Up (V12Kid Dance Mix) art: a glowing stone tower under a starry sky, with the StormJarl logo",
    blurb: "An early listen from the Level Up EP: StormJarl's climbing riff reworked for the dance floor with DJ V12Kid.",
    links: [
      { label: "StormJarl.com", url: "https://stormjarl.com" },
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" }
    ],
    featured: true,
    stream: null   // PLACEHOLDER (hidden): add { spotify, apple, youtube, amazon } song/album URLs on release day; null renders nothing
  },

  // ---------- Upcoming ----------
  {
    id: "harvest", artist: "GLASS CANONS", title: "HARVEST", kind: "Album",
    status: "upcoming", date: "2026-11-20",
    cover: "assets/img/glass-canons-harvest-600.webp", cover2x: "assets/img/glass-canons-harvest-1200.webp",
    alt: "HARVEST cover: a lone figure in a cracked, glowing field as a lightning storm rolls in",
    presave: "",   // PLACEHOLDER: add the DistroKid HyperFollow link when it exists
    tracks: [
      { n: 1, title: "WHAT YOU SOW", cover: "assets/img/harvest-tracks/01-what-you-sow-300.webp" },
      { n: 2, title: "GET IT RIGHT", cover: "assets/img/harvest-tracks/02-get-it-right-300.webp" },
      { n: 3, title: "REDLINE", cover: "assets/img/harvest-tracks/03-redline-300.webp" },
      { n: 4, title: "WANTS", cover: "assets/img/harvest-tracks/04-wants-300.webp" },
      { n: 5, title: "LATER", cover: "assets/img/harvest-tracks/05-later-300.webp" },
      { n: 6, title: "DIRTY MONEY", cover: "assets/img/harvest-tracks/06-dirty-money-300.webp" },
      { n: 7, title: "I CAN STILL FIGHT", cover: "assets/img/harvest-tracks/07-i-can-still-fight-300.webp" },
      { n: 8, title: "I PUT IT DOWN", cover: "assets/img/harvest-tracks/08-i-put-it-down-300.webp" },
      { n: 9, title: "TIMES LIKE DYING", cover: "assets/img/harvest-tracks/09-times-like-dying-300.webp" },
      { n: 10, title: "GET MINE", cover: "assets/img/harvest-tracks/10-get-mine-300.webp" },
      { n: 11, title: "LEFT TO REAP", cover: "assets/img/harvest-tracks/11-left-to-reap-300.webp" },
      { n: 12, title: "GET IT RIGHT (LIVE)", cover: "assets/img/harvest-tracks/12-get-it-right-live-300.webp" }
    ],
    credit: "A Bridge Recording release", group: "label",
    blurb: "Twelve songs about what you plant and what comes up. Heartland garage-blues with a haze of late-'60s psychedelia: a band in a room, rough edges and all.",
    links: [
      { label: "Apple Music", url: "https://music.apple.com/us/artist/glass-canons/1130575273" },
      { label: "Facebook", url: "https://www.facebook.com/glasscanons" }
    ],
    featured: true,
    stream: null   // PLACEHOLDER (hidden): add { spotify, apple, youtube, amazon } song/album URLs on release day; null renders nothing
  },
  {
    id: "level-up", artist: "StormJarl", title: "Level Up", kind: "EP",
    status: "upcoming", date: "2026-11-20", tentative: true,
    cover: "assets/img/stormjarl-level-up-600.webp", cover2x: "assets/img/stormjarl-level-up-1200.webp",
    alt: "Level Up cover: a glowing stone tower climbing into a starry night sky",
    presave: "",   // PLACEHOLDER: pre-save link not created yet
    tracks: [],    // PLACEHOLDER: track list not confirmed yet (add { n, title } entries)
    credit: "A Bridge Recording release", group: "label",
    blurb: "The next chapter of StormJarl's Dark Nordic Blues, with Ásdís Kjartandóttir leading the way.",
    links: [
      { label: "StormJarl.com", url: "https://stormjarl.com" },
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" }
    ],
    featured: true,
    stream: null   // PLACEHOLDER (hidden): add { spotify, apple, youtube, amazon } song/album URLs on release day; null renders nothing
  },
  {
    id: "threads", artist: "Kilynn Ross", title: "Threads",
    status: "upcoming", dateText: "Coming soon",
    date: "",      // PLACEHOLDER: release date unknown. Set "YYYY-MM-DD" when announced
    cover: "assets/img/kilynn-ross-threads-600.webp", cover2x: "assets/img/kilynn-ross-threads-1200.webp",
    alt: "Threads cover: a lone fence post on a hillside at sunset under a violet sky",
    presave: "",   // PLACEHOLDER: pre-save link not created yet
    credit: "A Bridge Recording release", group: "label",
    blurb: "New music from Kilynn Ross is on the way.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/2rikNqHi0MMZfLOFGy0sNp" }
    ],
    featured: true,
    stream: null   // PLACEHOLDER (hidden): add { spotify, apple, youtube, amazon } song/album URLs on release day; null renders nothing
  },

  // ---------- Out now: Bridge Recording artists ----------
  {
    id: "get-it-right", artist: "GLASS CANONS", title: "GET IT RIGHT", kind: "Single",
    status: "out", date: "2026-08-14",
    cover: "assets/img/glass-canons-get-it-right-600.webp", cover2x: "assets/img/glass-canons-get-it-right-1200.webp",
    alt: "GET IT RIGHT cover: a lone figure walks a cracked desert road toward a stormy sunset",
    credit: "A Bridge Recording release", group: "label",
    blurb: "The first taste of HARVEST, plus GET IT RIGHT (LIVE) with the crowd shouting it back.",
    stream: {
      spotify: { url: "https://open.spotify.com/track/2v5M6sr04HGBbId566ygi4" },
      apple: { url: "https://music.apple.com/us/album/get-it-right/6789293259?i=6789293440" },
      youtube: { url: "https://music.youtube.com/watch?v=qwvX73fsdI8" },
      amazon: { url: "https://music.amazon.com/tracks/B0H8B4RV8N" }
    }
  },
  {
    id: "midnight-circuit", artist: "StormJarl", title: "Midnight Circuit", kind: "Single",
    status: "out", dateText: "Out now",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/stormjarl-midnight-circuit-600.webp", cover2x: "assets/img/stormjarl-midnight-circuit-1200.webp",
    blurb: "Dark Nordic Blues reaches the machine age, featuring Ásdís Kjartandóttir.",
    stream: {
      spotify: { url: "https://open.spotify.com/track/163bx5fmrfSEyW6EXJ8q0P" },
      apple: { url: "https://music.apple.com/us/album/midnight-circuit-feat-%C3%A1sd%C3%ADs-kjartand%C3%B3ttir/6807490488?i=6807490489" },
      youtube: { url: "https://music.youtube.com/watch?v=Wjqsn7_VghM" },
      amazon: { url: "https://music.amazon.com/tracks/B0HHFSMY8L" }
    }
  },
  {
    id: "wild-call", artist: "Kilynn Ross", title: "Wild Call (Winding Stair Retreat)", kind: "Single",
    status: "out", date: "2026-09-30",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/kilynn-ross-wild-call-600.webp", cover2x: "assets/img/kilynn-ross-wild-call-1200.webp",
    alt: "Wild Call (Winding Stair Retreat) cover art by Kilynn Ross",
    blurb: "From Winding Stair Retreat, Bridge Recording's home at the foot of Oklahoma's Winding Stair Mountains, comes a heartland-fever song of twilight ridges, the Black Fork running through Ouachita land, old scars burning off in the fire, and the love that walks these trails with you. It climbs from the stillness of ancient stone into a huge, driving bass groove that pulls you home.",
    stream: {
      spotify: { url: "https://open.spotify.com/track/5lEDo4ArqyCheQx2EjZ4O8" },
      apple: { url: "https://music.apple.com/us/album/wild-call-winding-stair-retreat/6816736762?i=6816736763" },
      youtube: { url: "https://music.youtube.com/watch?v=LkDoohY0z20" },
      amazon: { url: "https://music.amazon.com/tracks/B0HL748T51" }
    }
  },
  {
    id: "salt-and-cedar", artist: "Kilynn Ross", title: "Salt & Cedar (Magnus Strings)", kind: "Single",
    status: "out", date: "2026-07-24",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/kilynn-ross-salt-and-cedar-600.webp", cover2x: "assets/img/kilynn-ross-salt-and-cedar-1200.webp",
    alt: "Salt & Cedar (Magnus Strings) cover art by Kilynn Ross",
    blurb: "For anyone who's tried to outrun a feeling, only to find it waiting on the porch when they got home. Salt on the wind, cedar on a shirt on the line, and a love that keeps pulling you back, because the roots run deeper than distance.",
    stream: {
      spotify: { url: "https://open.spotify.com/track/3aurB98PNroBcAsL9rnZHn" },
      apple: { url: "https://music.apple.com/us/album/salt-cedar-magnus-strings/6792883463?i=6792883464" },
      youtube: { url: "https://music.youtube.com/watch?v=u17YnUw-Ljs" },
      amazon: { url: "https://music.amazon.com/tracks/B0H9PKFH4X" }
    }
  },
  {
    id: "like-the-rain", artist: "Kilynn Ross", title: "Like the Rain", kind: "Single",
    status: "out", date: "2026-06-02",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/kilynn-ross-like-the-rain-600.webp", cover2x: "assets/img/kilynn-ross-like-the-rain-1200.webp",
    alt: "Like the Rain cover art by Kilynn Ross",
    blurb: "A slow-burning storm of a love song: rain on a tin roof, two people laying down old regrets, and a chorus that asks to be held until everything broken washes clean. It's surrender and second chances, built to swell like thunder rolling in.",
    stream: {
      spotify: { url: "https://open.spotify.com/track/5Vsh55j99FEKvCGo4V8ewl" },
      apple: { url: "https://music.apple.com/us/album/like-the-rain/6772876455?i=6772876456" },
      youtube: { url: "https://music.youtube.com/watch?v=oby5EWIeWxY" },
      amazon: { url: "https://music.amazon.com/tracks/B0H2TR8QGW" }
    }
  },
  {
    id: "echoes", artist: "Kilynn Ross", title: "Echoes", kind: "Album",
    status: "out", dateText: "2026",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/kilynn-ross-echoes-600.webp", cover2x: "assets/img/kilynn-ross-echoes-1200.webp",
    alt: "Echoes cover: trees silhouetted against a misty sunrise over an open field",
    stream: {
      spotify: { url: "https://open.spotify.com/album/7JEhYowB3mwjjSThqeqsUC", level: "album" },
      apple: { url: "https://music.apple.com/us/album/echoes/6767864202", level: "album" },
      youtube: { url: "https://music.youtube.com/playlist?list=OLAK5uy_n4k8Qx_tSc-yI3jyVs_60_D8gP-GMEOn8", level: "album" },
      amazon: { url: "https://music.amazon.com/albums/B0H15Q6H6R", level: "album" }
    }
  },

  // ---------- Client work: Recorded, Mixed and Mastered ----------
  {
    id: "you-knew", artist: "GLASS CANONS", title: "YOU KNEW",
    cover: "assets/img/glass-canons-you-knew-600.webp", cover2x: "assets/img/glass-canons-you-knew-1200.webp",
    alt: "YOU KNEW cover: a figure at a rain-streaked window over a city at night, holding a glowing phone",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/glass-canons-you-knew.mp3", featured: true,
    stream: {
      spotify: { url: "https://open.spotify.com/track/2bFVkmGRrwbrQ7ocds6ArO" },
      apple: { url: "https://music.apple.com/us/artist/glass-canons/1130575273", level: "artist" },
      youtube: { url: "https://music.youtube.com/watch?v=iZfVhI0atLg" },
      amazon: { url: "https://music.amazon.com/tracks/B0GCC3L28Z" }
    }
  },
  {
    id: "delayed", artist: "Zephaniah", title: "Delayed",
    cover: "assets/img/zephaniah-delayed-600.webp", cover2x: "assets/img/zephaniah-delayed-1200.webp",
    alt: "Delayed cover: Zephaniah smiling with a guitar",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/zephaniah-delayed.mp3"
  },
  {
    id: "do-you-miss-me", artist: "Hilary", title: "Do You Miss Me",
    cover: "assets/img/hilary-do-you-miss-me-600.webp", cover2x: "assets/img/hilary-do-you-miss-me-1200.webp",
    alt: "Do You Miss Me tile: the Bridge Recording logo above the title and artist name",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/hilary-do-you-miss-me.mp3", featured: true
  },

  // ---------- Client work: Mixed and Mastered ----------
  {
    id: "where-do-i-sign", artist: "Graham Cochrane", title: "Where Do I Sign",
    cover: "assets/img/graham-cochrane-where-do-i-sign-600.webp", cover2x: "assets/img/graham-cochrane-where-do-i-sign-1200.webp",
    alt: "Never Satisfied EP cover: commuters blurred in motion on a pale street",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/graham-cochrane-where-do-i-sign.mp3", featured: true,
    stream: {
      spotify: { url: "https://open.spotify.com/track/22Yu3JKpywVgEixRSLuvN4" },
      apple: { url: "https://music.apple.com/us/album/where-do-i-sign/1171154864?i=1171155168" },
      youtube: { url: "https://music.youtube.com/watch?v=jUlm1QVdzxI" },
      amazon: { url: "https://music.amazon.com/tracks/B01M742CT0" }
    }
  },
  {
    id: "new-england", artist: "Sunday Muse", title: "New England",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/sunday-muse-new-england.mp3",
    cover: "assets/img/sunday-muse-new-england-600.webp", cover2x: "assets/img/sunday-muse-new-england-1200.webp",
    alt: "New England cover: a deep blue watercolor moon on cream paper",
    stream: {
      spotify: { url: "https://open.spotify.com/track/5lpxYZQBzvWdyK0MF3Nesi" },
      apple: { url: "https://music.apple.com/us/album/new-england/1178465629?i=1178465633" },
      youtube: { url: "https://music.youtube.com/watch?v=_6QGzbcJSQI" },
      amazon: { url: "https://music.amazon.com/tracks/B01N0KIC6F" }
    }
  },
  {
    id: "sing-along", artist: "Frankie Barranco", title: "Sing Along",
    cover: "assets/img/frankie-barranco-sing-along-600.webp", cover2x: "assets/img/frankie-barranco-sing-along-1200.webp",
    alt: "Still EP cover: Frankie Barranco looking down beside blue water",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/frankie-barranco-sing-along.mp3",
    stream: {
      spotify: { url: "https://open.spotify.com/track/3GAM9xIPG6zs9s3d77wfyZ" },
      apple: { url: "https://music.apple.com/us/album/sing-along/1218029470?i=1218029612" },
      youtube: { url: "https://music.youtube.com/watch?v=77X5vG3oKnE" },
      amazon: { url: "https://music.amazon.com/tracks/B06XS72TFW" }
    }
  },
  {
    id: "circumstances", artist: "Dawson", title: "Circumstances",
    cover: "assets/img/dawson-circumstances-600.webp", cover2x: "assets/img/dawson-circumstances-1200.webp",
    alt: "Circumstance cover: a winding road through hills",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/dawson-circumstances.mp3",
    stream: {   // the platform release is "Circumstance" by Dawson Reeve (matched to this mix by preview audio); Amazon not confirmed, so left out
      title: "Circumstance", artist: "Dawson Reeve",
      spotify: { url: "https://open.spotify.com/track/4PAct1gFQH1V7w09bS9I6m" },
      apple: { url: "https://music.apple.com/us/album/circumstance/1308307024?i=1308307696" },
      youtube: { url: "https://music.youtube.com/watch?v=-tbInfgYniU" }
    }
  },
  {
    id: "the-surface-of-things", artist: "Andy Gullahorn", title: "The Surface Of Things",
    cover: "assets/img/andy-gullahorn-the-surface-of-things-600.webp", cover2x: "assets/img/andy-gullahorn-the-surface-of-things-1200.webp",
    alt: "Beyond the Frame cover: a billboard framing a mountain scene among evergreen trees",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/andy-gullahorn-the-surface-of-things.mp3",
    stream: {
      spotify: { url: "https://open.spotify.com/track/1xXMh15oRIFH3GfVqfkJbf" },
      apple: { url: "https://music.apple.com/us/album/the-surface-of-things/686198481?i=686198538" },
      youtube: { url: "https://music.youtube.com/watch?v=-d18jHyqHnQ" },
      amazon: { url: "https://music.amazon.com/tracks/B00EETF440" }
    }
  }
];

/* The Bridge Recording artists (Artists page). */
window.BR_ARTISTS = [
  {
    name: "GLASS CANONS",
    site: "https://glasscanons.com",
    tagline: "Heartland garage-blues with a neo-psychedelic haze.",
    about: "Weathered, honest rock with dirt under its nails. The new album, HARVEST, is out November 20, 2026.",
    image: "assets/img/glass-canons-harvest-600.webp", image2x: "assets/img/glass-canons-harvest-1200.webp",
    alt: "HARVEST cover: a lone figure in a cracked, glowing field as a lightning storm rolls in",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/2IedYPAnTwRdS0tAr0U7sx" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/glass-canons/1130575273" },
      { label: "Amazon Music", url: "https://music.amazon.com/artists/B0GH86FC5H" },
      { label: "Facebook", url: "https://www.facebook.com/glasscanons" }
    ]
  },
  {
    name: "StormJarl",
    site: "https://stormjarl.com",
    tagline: "Dark Nordic Blues.",
    about: "Modern rock riffs meet the ritual pulse of the North: war drums, chanted voices and a low end you feel in your chest.",
    image: "assets/img/stormjarl-live-sq-600.webp", image2x: "assets/img/stormjarl-live-sq-1080.webp", image2xW: 1080,
    alt: "StormJarl on stage",
    badge: "assets/img/stormjarl-lockup-white-red.svg",   // small logo shown over the photo (optional)
    links: [
      { label: "▶ Early listen: Level Up (V12Kid)", url: "work.html#level-up-v12kid" },
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/stormjarl/1861394525" },
      { label: "Amazon Music", url: "https://music.amazon.com/artists/B0G6YX9MX2" },
      { label: "YouTube", url: "https://www.youtube.com/@storm-jarl" }
    ]
  },
  {
    name: "Kilynn Ross",
    site: "https://kilynnross.com",
    tagline: "Indie folk with a baritone voice and a cinematic streak.",
    image: "assets/img/kilynn-ross-echoes-600.webp", image2x: "assets/img/kilynn-ross-echoes-1200.webp",
    alt: "Echoes cover: trees silhouetted against a misty sunrise over an open field",
    about: "Kilynn Ross's album Echoes is out now, along with the 2026 singles Like the Rain, Salt & Cedar (Magnus Strings) and Wild Call (Winding Stair Retreat). Threads is coming soon.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/2rikNqHi0MMZfLOFGy0sNp" },
      { label: "Amazon Music", url: "https://music.amazon.com/artists/B0H15JT7BV" }
    ]
  }
];
