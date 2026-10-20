/* Renders release cards from releases.js. No editing needed here. */
(function () {
  var R = window.BR_RELEASES || [], A = window.BR_ARTISTS || [];
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function fmtDate(r) {
    if (r.date) {
      var p = r.date.split("-"), t = MONTHS[+p[1] - 1] + " " + (+p[2]) + ", " + p[0];
      return r.tentative ? t + " (tentative)" : t;
    }
    return r.dateText || "";
  }
  function initials(s) { return s.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); }
  function links(ls, r) {
    ls = (r && r.presave ? [{ label: "Pre-save", url: r.presave }] : []).concat(ls || []);
    if (!ls.length) return "";
    return '<p class="links">' + ls.map(function (l) {
      var ext = /^https?:/.test(l.url);
      return '<a href="' + esc(l.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : ' class="link-internal"') + '>' + esc(l.label) + '</a>';
    }).join("") + "</p>";
  }
  var PLATFORMS = [["spotify", "Spotify"], ["apple", "Apple Music"], ["youtube", "YouTube"], ["amazon", "Amazon Music"]];
  function streamRow(r) {
    var st = r.stream; if (!st) return "";
    var song = st.title || r.title;   // platform song title when it differs from the tile title
    var items = PLATFORMS.filter(function (p) { return st[p[0]] && st[p[0]].url; }).map(function (p) {
      var l = st[p[0]], art = l.level === "artist";
      var who = st.artist || r.artist;
      var aria = art ? "Open " + who + " on " + p[1] + " (artist page; " + song + " isn't on " + p[1] + ")" : "Listen to " + song + (st.artist ? " by " + st.artist : "") + " on " + p[1];
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" aria-label="' + esc(aria) + '"' +
        (art ? ' title="' + esc(who + " artist page on " + p[1] + ". " + song + " isn't on " + p[1] + ".") + '"' : "") + ">" + esc(p[1]) + (art ? " (artist)" : "") + "</a>";
    });
    if (!items.length) return "";
    var lead = r.group === "client" ? "Stream the release" : "Listen on";
    if (st.title) lead += ", \u201c" + song + "\u201d" + (st.artist ? " by " + st.artist : "");
    return '<div class="stream"><span class="stream-label">' + esc(lead) + ":</span>" + items.join("") + "</div>";
  }
  function img(src, src2x, aspect, alt, cls, w2x) {
    var wh = aspect === "4/5" ? ' width="600" height="750"' : aspect === "4/3" ? ' width="600" height="450"' : ' width="600" height="600"';
    return '<img class="' + cls + '" src="' + esc(src) + '"' + (src2x ? ' srcset="' + esc(src) + ' 600w, ' + esc(src2x) + ' ' + (w2x || (aspect === "4/5" ? "1080" : "1200")) + 'w" sizes="(max-width:640px) 92vw, 360px"' : "") +
      wh + (aspect ? ' style="aspect-ratio:' + esc(aspect) + '"' : "") + ' alt="' + esc(alt) + '" loading="lazy" decoding="async">';
  }
  function art(r) {
    if (r.cover) return img(r.cover, r.cover2x, r.coverAspect, r.alt || (r.title + " cover art by " + r.artist), "art");
    return '<div class="art art-text" aria-hidden="true"><span>' + esc(initials(r.artist)) + "</span></div>";
  }
  function card(r) {
    var when = fmtDate(r);
    var tag = r.status === "upcoming" ? '<span class="tag tag-soon">' + esc(when || "Coming soon") + "</span>"
            : r.status === "early" ? '<span class="tag tag-soon">Early listen</span>'
            : (r.kind ? '<span class="tag">' + esc(r.kind) + "</span>" : "");
    return '<article class="card" id="' + esc(r.id) + '">' + art(r) +
      '<div class="card-body">' + tag +
      "<h3>" + esc(r.title) + "</h3>" +
      '<p class="artist">' + esc(r.artist) + "</p>" +
      '<p class="credit">' + esc(r.credit) + "</p>" +
      (r.credit2 ? '<p class="credit2">' + esc(r.credit2) + "</p>" : "") +
      (r.status === "early" && when ? '<p class="when">' + esc(when) + "</p>" : "") +
      (r.blurb ? '<p class="blurb clamp" id="blurb-' + esc(r.id) + '">' + esc(r.blurb) + '</p><button class="more" type="button" aria-expanded="false" aria-controls="blurb-' + esc(r.id) + '" hidden>Read more</button>' : "") +
      '<div class="card-foot">' +
      (r.audio ? '<audio controls preload="none" src="' + esc(r.audio) + '" aria-label="Play ' + esc(r.artist + " – " + r.title) + '"></audio>' : "") +
      streamRow(r) + links(r.links, r) + "</div></div></article>";
  }
  function trackGrid(r) {
    if (!r.tracks || !r.tracks.length) return "";
    return '<ol class="tracks" aria-label="' + esc(r.title) + ' track list">' + r.tracks.map(function (t) {
      return "<li>" + (t.cover ? '<img src="' + esc(t.cover) + '" alt="" width="300" height="300" loading="lazy" decoding="async">' : "") +
        '<span class="tn">' + esc(t.n) + '</span><span class="tt">' + esc(t.title) + "</span></li>";
    }).join("") + "</ol>";
  }
  function newsItem(r) {
    return '<li class="news-item' + (r.cover ? " has-thumb" : "") + '" id="news-' + esc(r.id) + '"><div class="news-date">' + esc(r.status === "early" ? "Early listen" : (fmtDate(r) || (r.status === "upcoming" ? "Coming soon" : "Out now"))) + "</div>" +
      (r.cover ? '<div class="news-thumb">' + img(r.cover, null, r.coverAspect, r.alt || (r.title + " cover art by " + r.artist), "") + "</div>" : "") +
      '<div class="news-body"><h3>' + esc(r.artist) + " · <em>" + esc(r.title) + "</em>" + (r.kind ? ' <span class="kind">' + esc(r.kind) + "</span>" : "") + "</h3>" +
      (r.status === "early" ? '<p class="credit">' + esc(r.credit) + (r.credit2 ? " · " + esc(r.credit2) : "") + "</p><p>" + esc(fmtDate(r)) + "</p>" : "") +
      (r.blurb ? "<p>" + esc(r.blurb) + "</p>" : "") +
      (r.audio ? '<audio controls preload="none" src="' + esc(r.audio) + '" aria-label="Play ' + esc(r.artist + " – " + r.title) + '"></audio>' : "") +
      streamRow(r) + links(r.links, r) + trackGrid(r) + "</div></li>";
  }
  function artistCard(a) {
    var pic = a.image ? img(a.image, a.image2x, a.imageAspect, a.alt || a.name, a.imageStyle === "logo" ? "art art-logo" : "art", a.image2xW)
                      : '<div class="art art-text" aria-hidden="true"><span>' + esc(initials(a.name)) + "</span></div>";
    if (a.image && a.badge) pic = '<div class="art-wrap">' + pic + '<img class="art-badge" src="' + esc(a.badge) + '" alt="" aria-hidden="true" width="3034" height="792" loading="lazy" decoding="async"></div>';
    var latest = R.filter(function (r) { return r.artist === a.name && r.group === "label"; })
      .map(function (r) {
        var t = "<em>" + esc(r.title) + "</em>";
        if (r.audio) t = '<a href="work.html#' + esc(r.id) + '">' + t + "</a>";
        return "<li>" + t + (r.kind ? " · " + esc(r.kind) : "") + " · " + esc(r.status === "upcoming" ? (fmtDate(r) || "Coming soon") : r.status === "early" ? "Listen now" : "Out now") + "</li>"; }).join("");
    var site = a.site ? '<p class="site-btn"><a class="btn btn-primary btn-sm" href="' + esc(a.site) + '" target="_blank" rel="noopener" aria-label="Visit the official ' + esc(a.name) + ' site, ' + esc(a.site.replace(/^https?:\/\//, "")) + '">Visit the official site</a></p>' : "";
    return '<article class="card artist-card">' + pic + '<div class="card-body"><h3>' + esc(a.name) + "</h3>" + site +
      '<p class="credit">' + esc(a.tagline).replace(/neo-psychedelic/gi, '<span style="white-space:nowrap">$&</span>') + "</p><p class=\"blurb\">" + esc(a.about) + "</p>" +
      (latest ? '<ul class="mini">' + latest + "</ul>" : "") + links(a.links) + "</div></article>";
  }
  function sortByDate(list, dir) {
    return list.slice().sort(function (a, b) {
      var x = a.date || (dir > 0 ? "9999" : "0000"), y = b.date || (dir > 0 ? "9999" : "0000");
      return dir * (x < y ? -1 : x > y ? 1 : 0);
    });
  }
  var pick = {
    featured: function () { return R.filter(function (r) { return r.featured && r.status === "out"; }); },
    early: function () { return R.filter(function (r) { return r.status === "early"; }); },
    upcoming: function () { return sortByDate(R.filter(function (r) { return r.status === "upcoming"; }), 1); },
    work: function () { return R.filter(function (r) { return r.status === "early"; }).concat(R.filter(function (r) { return r.group === "client"; }), R.filter(function (r) { return r.group === "label" && r.status === "out"; })); },
    client: function () { return R.filter(function (r) { return r.group === "client"; }); },
    label: function () { return R.filter(function (r) { return r.group === "label"; }); }
  };
  document.querySelectorAll("[data-list]").forEach(function (el) {
    var k = el.getAttribute("data-list");
    if (k === "artists") { el.innerHTML = A.map(artistCard).join(""); return; }
    if (k === "news-early") { el.innerHTML = pick.early().map(newsItem).join(""); return; }
    if (k === "news-upcoming") { el.innerHTML = pick.upcoming().map(newsItem).join(""); return; }
    if (k === "news-out") { el.innerHTML = R.filter(function (r) { return r.status === "out" && r.group === "label"; }).map(newsItem).join(""); return; }
    if (k === "client-names") {
      var seen = {}, names = R.filter(function (r) { return r.group === "client"; }).map(function (r) { return r.artist; })
        .filter(function (n) { return seen[n] ? false : (seen[n] = true); });
      el.innerHTML = names.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join(""); return;
    }
    el.innerHTML = (pick[k] ? pick[k]() : []).map(card).join("");
  });
  // Work page filter buttons
  var bar = document.querySelector(".filters");
  if (bar) bar.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    bar.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    var f = b.getAttribute("data-filter");
    document.querySelectorAll("#work-grid .card").forEach(function (c) {
      var r = R.filter(function (x) { return x.id === c.id; })[0];
      var show = f === "all" || (f === "label" ? r.group === "label" : r.credit === f);
      c.hidden = !show;
    });
  });
  // Clamped card blurbs: show "Read more" only where the text is actually cut off
  function checkClamps() {
    document.querySelectorAll(".blurb.clamp").forEach(function (p) {
      var b = p.nextElementSibling; if (!b || !b.classList.contains("more")) return;
      if (p.classList.contains("open")) { b.hidden = false; return; }
      b.hidden = !(p.scrollHeight > p.clientHeight + 2);
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".more"); if (!b) return;
    var p = b.previousElementSibling, open = p.classList.toggle("open");
    b.setAttribute("aria-expanded", open ? "true" : "false"); b.textContent = open ? "Show less" : "Read more";
  });
  checkClamps(); window.addEventListener("resize", checkClamps);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(checkClamps);
  // Only one audio player at a time
  document.addEventListener("play", function (e) {
    document.querySelectorAll("audio").forEach(function (a) { if (a !== e.target) a.pause(); });
  }, true);
})();
