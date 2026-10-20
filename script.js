(() => {
  "use strict";
  const data = window.SITE_DATA;
  if (!data) return;

  const $ = (id) => document.getElementById(id);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const validUrl = (url) => /^(https?:\/\/|mailto:|assets\/|\.\/?[\w-])/i.test(url || "");
  const link = (label, url) => {
    if (!url || !validUrl(url)) return null;
    const a = make("a", "", label);
    a.href = url;
    if (/^https?:\/\//i.test(url)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  };

  // ========================================================
  // 1. Personal profile and research information
  // ========================================================
  $("first-name").textContent = data.highlightName || data.name;
  $("last-name").textContent = data.remainingName || "";
  document.title = "Sanghyeon Nam | Robotics & MPC Researcher | Texas A&M University";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = `${data.name} — ${data.role || "Researcher"} at ${data.affiliation || ""}. Research, news, and publications.`;

  const intro = $("intro-copy");
  for (const paragraph of data.introduction || []) intro.appendChild(make("p", "", paragraph));

  const research = $("research-interests");
  for (const interest of data.researchInterests || []) research.appendChild(make("li", "", interest));

  if (data.advisor) {
    const advisor = $("advisor");
    advisor.hidden = false;
    advisor.append("I am advised by ");
    const advisorLink = link(data.advisor, data.advisorUrl);
    advisor.append(advisorLink || document.createTextNode(data.advisor));
    advisor.append(".");
  }

  const portrait = $("profile-photo");
  if (data.photo) portrait.src = data.photo;
  portrait.alt = data.photo && !data.photo.includes("placeholder") && !data.photo.startsWith("data:") ? `Portrait of ${data.name}` : "Placeholder portrait — replace with your own photo";
  portrait.addEventListener("error", () => {
    if (!portrait.src.endsWith("portrait-placeholder.svg")) {
      portrait.src = "assets/portrait-placeholder.svg";
      portrait.alt = "Placeholder portrait — replace with your own photo";
    }
  });

  const meta = $("profile-meta");
  meta.replaceChildren();
  if (data.affiliation) meta.appendChild(make("span", "", data.affiliation));
  for (const line of data.location || []) meta.appendChild(make("span", "", line));

  const social = $("social-links");
  const links = data.links || {};
  for (const [label, destination] of [
    ["Email", links.email ? `mailto:${links.email}` : ""],
    ["Google Scholar", links.googleScholar],
    ["GitHub", links.github],
    ["LinkedIn", links.linkedin],
    ["CV", links.cv]
  ]) {
    const item = link(label + " ↗", destination);
    if (item) social.appendChild(item);
  }

  // ========================================================
  // 2. News thumbnails and clickable summaries
  // ========================================================
  // Each news entry is a real link. The ?post=... URL also works on GitHub Pages.
  const news = $("news-list");
  const currentFile = location.pathname.split("/").pop() || "index.html";
  const newsItems = Array.isArray(data.news) ? data.news : [];
  const newsUrl = (item) => `${currentFile}?post=${encodeURIComponent(item.id)}`;
  const imageElement = (src, alt, className = "") => {
    const img = make("img", className);
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.addEventListener("error", () => {
      const holder = img.closest(".news-thumb, .news-cover, .news-gallery-frame");
      if (holder) holder.classList.add("image-unavailable");
      img.hidden = true;
    });
    return img;
  };

  if (!newsItems.length) news.appendChild(make("p", "empty-message", "News posts will appear here."));
  for (const item of newsItems) {
    const row = make("div", "news-item");
    row.appendChild(make("div", "news-date", item.date || ""));
    const hasPost = Boolean(item.id);
    const story = make(hasPost ? "a" : "div", `news-story${hasPost ? " news-story-link" : ""}`);
    if (hasPost) {
      story.href = newsUrl(item);
      story.setAttribute("aria-label", `Read news post: ${item.title || item.text || "News"}`);
    }
    if (item.image) {
      const thumb = make("span", "news-thumb");
      thumb.appendChild(imageElement(item.image, item.imageAlt || item.title || "News thumbnail"));
      story.appendChild(thumb);
    }
    const summary = make("span", "news-summary");
    const title = item.title || item.text || "News update";
    if (item.title) {
      summary.appendChild(make("span", "news-title", title));
      if (item.excerpt) summary.appendChild(make("span", "news-excerpt", item.excerpt));
    } else {
      // Backward compatible with the original date/text/emphasis news entries.
      const description = make("span", "news-description");
      const start = (item.text || "").indexOf(item.emphasis || "\u0000");
      if (item.emphasis && start !== -1) {
        description.append(document.createTextNode(item.text.slice(0, start)));
        description.appendChild(make("strong", "", item.emphasis));
        description.append(document.createTextNode(item.text.slice(start + item.emphasis.length)));
      } else description.textContent = item.text || "";
      summary.appendChild(description);
    }
    if (hasPost) summary.appendChild(make("span", "news-read-more", "Read post →"));
    story.appendChild(summary);
    row.appendChild(story);
    news.appendChild(row);
  }

  // ========================================================
  // 3. Dedicated news post view and photo galleries
  // ========================================================
  const postId = new URLSearchParams(location.search).get("post");
  if (postId !== null) {
    $("about").hidden = true;
    $("publications").hidden = true;
    const postPage = $("news-post-page");
    postPage.hidden = false;
    const homeUrl = `${currentFile}#news-heading`;
    const back = make("a", "post-back", "← Back to news");
    back.href = homeUrl;
    postPage.appendChild(back);
    const item = newsItems.find((n) => n.id === postId);
    if (!item) {
      postPage.appendChild(make("h1", "post-title", "Post not found"));
      postPage.appendChild(make("p", "post-lead", "This news post does not exist, or its link has changed."));
      document.title = `Post not found · ${data.name}`;
    } else {
      const header = make("header", "post-header");
      header.appendChild(make("div", "post-kicker", `NEWS  /  ${item.date || "UPDATE"}`));
      header.appendChild(make("h1", "post-title", item.title || item.text || "News post"));
      if (item.excerpt) header.appendChild(make("p", "post-lead", item.excerpt));
      postPage.appendChild(header);
      if (item.image) {
        const cover = make("figure", "news-cover");
        cover.appendChild(imageElement(item.image, item.imageAlt || item.title || "Post cover"));
        if (item.imageCaption) cover.appendChild(make("figcaption", "image-caption", item.imageCaption));
        postPage.appendChild(cover);
      }
      const body = make("div", "post-body");
      const paragraphs = Array.isArray(item.content) ? item.content : (item.content ? [item.content] : []);
      for (const paragraph of paragraphs) body.appendChild(make("p", "", paragraph));
      if (!paragraphs.length && item.text) body.appendChild(make("p", "", item.text));
      postPage.appendChild(body);
      if (Array.isArray(item.gallery) && item.gallery.length) {
        const photos = make("section", "post-gallery");
        photos.appendChild(make("h2", "post-gallery-title", "Gallery"));
        const grid = make("div", "post-gallery-grid");
        for (const photo of item.gallery) {
          if (!photo.src) continue;
          const fig = make("figure", "post-gallery-photo");
          const frame = make("div", "news-gallery-frame");
          frame.appendChild(imageElement(photo.src, photo.alt || "Gallery image"));
          fig.appendChild(frame);
          if (photo.caption) fig.appendChild(make("figcaption", "image-caption", photo.caption));
          grid.appendChild(fig);
        }
        photos.appendChild(grid);
        postPage.appendChild(photos);
      }
      if (Array.isArray(item.links) && item.links.length) {
        const actions = make("div", "post-links");
        for (const resource of item.links) {
          const a = link(`${resource.label || "Link"} ↗`, resource.url);
          if (a) actions.appendChild(a);
        }
        if (actions.childElementCount) postPage.appendChild(actions);
      }
      document.title = `${item.title || "News"} · ${data.name}`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.content = item.excerpt || item.title || "Research news";
    }
    const bottomBack = make("a", "post-bottom-back", "← All news");
    bottomBack.href = homeUrl;
    postPage.appendChild(bottomBack);
    // Home navigation must still work when viewing an article URL.
    for (const nav of document.querySelectorAll("[data-nav]")) {
      nav.href = `${currentFile}#${nav.dataset.nav}`;
      nav.classList.remove("is-active");
      nav.removeAttribute("aria-current");
    }
  }

  // ========================================================
  // 4. Publications
  // ========================================================
  const pubList = $("publication-list");
  if (!(data.publications || []).length) pubList.appendChild(make("p", "empty-message", "Publications will be listed here."));
  for (const paper of data.publications || []) {
    const article = make("article", "publication");
    const top = make("div", "publication-topline");
    top.append(make("span", "publication-type", paper.type || "Publication"));
    top.append(make("span", "publication-year", paper.year || ""));
    article.appendChild(top);
    article.appendChild(make("h3", "publication-title", paper.title));
    if (paper.authors) article.appendChild(make("p", "publication-authors", paper.authors));
    if (paper.venue) article.appendChild(make("p", "publication-venue", paper.venue));
    if (paper.description) article.appendChild(make("p", "publication-description", paper.description));
    const actions = make("div", "publication-links");
    for (const [label, destination] of [["paper ↗", paper.paperUrl], ["code ↗", paper.codeUrl], ["project ↗", paper.projectUrl]]) {
      const item = link(label, destination);
      if (item) actions.appendChild(item);
    }
    if (actions.childElementCount) article.appendChild(actions);
    pubList.appendChild(article);
  }
  $("footer-text").textContent = data.footer || `© ${new Date().getFullYear()} ${data.name}`;

  // ========================================================
  // 5. Theme selection and page navigation
  // ========================================================
  const root = document.documentElement;
  const button = $("theme-toggle");
  let savedTheme;
  try { savedTheme = localStorage.getItem("research-site-theme"); } catch (_) { /* Local storage may be unavailable */ }
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#1b1b1b" : "#fbfbfa";
  };
  setTheme(savedTheme === "light" ? "light" : "dark");
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("research-site-theme", next); } catch (_) { /* Nothing else needed */ }
  });

  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const setActive = (id) => {
    navLinks.forEach((a) => {
      const current = a.dataset.nav === id;
      a.classList.toggle("is-active", current);
      if (current) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  };
  navLinks.forEach((a) => a.addEventListener("click", () => setActive(a.dataset.nav)));
  if (postId === null && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-17% 0px -65% 0px", threshold: 0 });
    observer.observe($("about"));
    observer.observe($("publications"));
  }
  if (postId === null && location.hash === "#publications") setActive("publications");
})();
