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
              "label"   = Glass Canons / StormJarl / Kilynn Ross releases
    audio     path to an mp3 in assets/audio/ (optional, keep under ~10 MB)
    cover     path to a square image in assets/img/ (optional)
    blurb     one or two friendly sentences (optional)
    links     list of { label, url } streaming / video links (optional)
    featured  true = also show on the Home page (optional)
    cover2x   larger version of the cover for sharp screens (optional)
    alt       short description of the art for people using screen readers (optional)
    coverAspect  "4/5" for portrait art such as teasers (default square)
    tracks    list of { n, title, cover } shown as a small track grid on News (optional)
    presave   pre-save / smart link URL. Leave "" until it exists (nothing shows while empty)
*/
window.BR_RELEASES = [
  // ---------- Early listen ----------
  {
    id: "level-up-v12kid", artist: "StormJarl", title: "Level Up (V12Kid)", kind: "Early listen",
    status: "early", dateText: "Level Up EP out November 20, 2026 (tentative)",
    credit: "Mixed and Mastered by Bridge Recording", credit2: "In collaboration with DJ V12Kid", group: "label",
    audio: "assets/audio/stormjarl-level-up-v12kid-mix.mp3",
    cover: "assets/img/stormjarl-level-up-teaser-600.webp", cover2x: "assets/img/stormjarl-level-up-teaser-1080.webp", coverAspect: "4/5",
    alt: "Level Up teaser art for StormJarl's new EP",
    blurb: "An early listen from the Level Up EP: StormJarl's climbing riff reworked for the dance floor with DJ V12Kid.",
    links: [
      { label: "StormJarl.com", url: "https://stormjarl.com" },
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" }
    ],
    featured: true
  },

  // ---------- Upcoming ----------
  {
    id: "harvest", artist: "Glass Canons", title: "Harvest", kind: "Album",
    status: "upcoming", date: "2026-11-20",
    cover: "assets/img/glass-canons-harvest-600.webp", cover2x: "assets/img/glass-canons-harvest-1200.webp",
    alt: "Harvest cover: a lone figure in a cracked, glowing field as a lightning storm rolls in",
    presave: "",   // PLACEHOLDER: add the DistroKid HyperFollow link when it exists
    tracks: [
      { n: 1, title: "What You Sow", cover: "assets/img/harvest-tracks/01-what-you-sow-300.webp" },
      { n: 2, title: "Get It Right", cover: "assets/img/harvest-tracks/02-get-it-right-300.webp" },
      { n: 3, title: "Redline", cover: "assets/img/harvest-tracks/03-redline-300.webp" },
      { n: 4, title: "Wants", cover: "assets/img/harvest-tracks/04-wants-300.webp" },
      { n: 5, title: "Later", cover: "assets/img/harvest-tracks/05-later-300.webp" },
      { n: 6, title: "Dirty Money", cover: "assets/img/harvest-tracks/06-dirty-money-300.webp" },
      { n: 7, title: "I Can Still Fight", cover: "assets/img/harvest-tracks/07-i-can-still-fight-300.webp" },
      { n: 8, title: "I Put It Down", cover: "assets/img/harvest-tracks/08-i-put-it-down-300.webp" },
      { n: 9, title: "Times Like Dying", cover: "assets/img/harvest-tracks/09-times-like-dying-300.webp" },
      { n: 10, title: "Get Mine", cover: "assets/img/harvest-tracks/10-get-mine-300.webp" },
      { n: 11, title: "Left to Reap", cover: "assets/img/harvest-tracks/11-left-to-reap-300.webp" },
      { n: 12, title: "Get It Right (Live)", cover: "assets/img/harvest-tracks/12-get-it-right-live-300.webp" }
    ],
    credit: "A Bridge Recording release", group: "label",
    blurb: "Twelve songs about what you plant and what comes up. Heartland garage-blues with a haze of late-'60s psychedelia: a band in a room, rough edges and all.",
    links: [
      { label: "Apple Music", url: "https://music.apple.com/us/artist/glass-canons/1130575273" },
      { label: "Facebook", url: "https://www.facebook.com/glasscanons" }
    ],
    featured: true
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
    featured: true
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
    featured: true
  },

  // ---------- Out now: Bridge Recording artists ----------
  {
    id: "get-it-right", artist: "Glass Canons", title: "Get It Right", kind: "Single",
    status: "out", date: "2026-08-14",
    cover: "assets/img/glass-canons-get-it-right-600.webp", cover2x: "assets/img/glass-canons-get-it-right-1200.webp",
    alt: "Get It Right cover: a lone figure walks a cracked desert road toward a stormy sunset",
    credit: "A Bridge Recording release", group: "label",
    blurb: "The first taste of Harvest, plus a live version with the crowd shouting it back.",
    links: [
      { label: "Apple Music", url: "https://music.apple.com/us/album/get-it-right-single/6789293259" }
    ]
  },
  {
    id: "midnight-circuit", artist: "StormJarl", title: "Midnight Circuit", kind: "Single",
    status: "out", dateText: "Out now",
    credit: "A Bridge Recording release", group: "label",
    cover: "assets/img/stormjarl-midnight-circuit-600.webp",
    blurb: "Dark Nordic Blues reaches the machine age, featuring Ásdís Kjartandóttir.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/stormjarl/1861394525" },
      { label: "YouTube", url: "https://www.youtube.com/playlist?list=OLAK5uy_kCyT0FhhDxgJ7AeqYyW-yVmsJJx2sjIpc" }
    ]
  },
  {
    id: "echoes", artist: "Kilynn Ross", title: "Echoes", kind: "Album",
    status: "out", dateText: "2026",
    credit: "A Bridge Recording release", group: "label",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/album/7JEhYowB3mwjjSThqeqsUC" }
    ]
  },
  {
    id: "every-gift", artist: "Kilynn Ross", title: "Every Gift (Adela's Song)", kind: "Single",
    status: "out", dateText: "2026",
    credit: "A Bridge Recording release", group: "label",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/album/7D6IB2kkqRkT793rTPCsip" }
    ]
  },

  // ---------- Client work: Recorded, Mixed and Mastered ----------
  {
    id: "you-knew", artist: "Glass Canons", title: "You Knew",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/glass-canons-you-knew.mp3", featured: true
  },
  {
    id: "delayed", artist: "Zephaniah", title: "Delayed",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/zephaniah-delayed.mp3"
  },
  {
    id: "do-you-miss-me", artist: "Hilary", title: "Do You Miss Me",
    status: "out", credit: "Recorded, Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/hilary-do-you-miss-me.mp3", featured: true
  },

  // ---------- Client work: Mixed and Mastered ----------
  {
    id: "where-do-i-sign", artist: "Graham Cochrane", title: "Where Do I Sign",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/graham-cochrane-where-do-i-sign.mp3", featured: true
  },
  {
    id: "new-england", artist: "Sunday Muse", title: "New England",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/sunday-muse-new-england.mp3",
    cover: "assets/img/sunday-muse-new-england-600.webp",
    alt: "New England cover: a deep blue watercolor moon on cream paper"
  },
  {
    id: "sing-along", artist: "Frankie Barranco", title: "Sing Along",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/frankie-barranco-sing-along.mp3"
  },
  {
    id: "circumstances", artist: "Dawson", title: "Circumstances",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/dawson-circumstances.mp3"
  },
  {
    id: "the-surface-of-things", artist: "Andy Gullahorn", title: "The Surface Of Things",
    status: "out", credit: "Mixed and Mastered by Bridge Recording", group: "client",
    audio: "assets/audio/andy-gullahorn-the-surface-of-things.mp3"
  }
];

/* The Bridge Recording artists (Artists page). */
window.BR_ARTISTS = [
  {
    name: "Glass Canons",
    tagline: "Heartland garage-blues with a neo-psychedelic haze.",
    about: "Weathered, honest rock with dirt under its nails. The new album, Harvest, is out November 20, 2026.",
    image: "assets/img/glass-canons-marquee-600.webp", image2x: "assets/img/glass-canons-marquee-1200.webp",
    alt: "Glass Canons' light-up marquee letters G and C",
    links: [
      { label: "Apple Music", url: "https://music.apple.com/us/artist/glass-canons/1130575273" },
      { label: "Facebook", url: "https://www.facebook.com/glasscanons" }
    ]
  },
  {
    name: "StormJarl",
    tagline: "Dark Nordic Blues.",
    about: "Modern rock riffs meet the ritual pulse of the North: war drums, chanted voices and a low end you feel in your chest.",
    image: "assets/img/stormjarl-live-sq-600.webp", image2x: "assets/img/stormjarl-live-sq-1080.webp", image2xW: 1080,
    alt: "StormJarl on stage",
    badge: "assets/img/stormjarl-lockup-white-red.svg",   // small logo shown over the photo (optional)
    links: [
      { label: "▶ Early listen: Level Up (V12Kid)", url: "work.html#level-up-v12kid" },
      { label: "StormJarl.com", url: "https://stormjarl.com" },
      { label: "Spotify", url: "https://open.spotify.com/artist/1Ej916sW5GaDQGDkh1p8Cb" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/stormjarl/1861394525" },
      { label: "YouTube", url: "https://www.youtube.com/@storm-jarl" }
    ]
  },
  {
    name: "Kilynn Ross",
    tagline: "Indie folk with a baritone voice and a cinematic streak.",
    image: "assets/img/kilynn-ross-threads-600.webp",
    alt: "Threads cover art for Kilynn Ross",
    about: "Kilynn Ross released the album Echoes and a run of singles in 2026. Threads is coming soon.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/2rikNqHi0MMZfLOFGy0sNp" }
    ]
  }
];
