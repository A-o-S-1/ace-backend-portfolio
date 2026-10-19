(() => {
  "use strict";
  const config = window.PORTFOLIO_CONFIG || {};
  const projectGrid = document.getElementById("project-grid");

  const safeUrl = (value) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch {
      return null;
    }
  };

  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  function renderProjects() {
    if (!projectGrid) return;
    projectGrid.replaceChildren();
    (config.projects || []).forEach((project, index) => {
      const card = makeElement("article", "project-card");
      const top = makeElement("div", "project-top");
      top.append(makeElement("span", "project-number", `PROJECT 0${index + 1}`));
      top.append(makeElement("span", "project-status", project.status || "In development"));
      card.append(top);
      card.append(makeElement("h3", "", project.name || "Untitled project"));
      card.append(makeElement("p", "project-problem", project.problem || ""));
      card.append(makeElement("h4", "", "Key features"));
      const featureList = makeElement("ul", "feature-list");
      (project.features || []).forEach((feature) => featureList.append(makeElement("li", "", feature)));
      card.append(featureList);
      card.append(makeElement("h4", "", "Technologies"));
      const techList = makeElement("div", "tech-list");
      (project.technologies || []).forEach((technology) => techList.append(makeElement("span", "tech-pill", technology)));
      card.append(techList);

      const links = makeElement("div", "project-links");
      const linkOptions = [
        ["repositoryUrl", "Source code"],
        ["liveApiUrl", "Live API"],
        ["docsUrl", "API documentation"]
      ];
      linkOptions.forEach(([key, label]) => {
        const url = safeUrl(project[key]);
        if (url) {
          const link = makeElement("a", "", label);
          link.href = url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute("aria-label", `${label} for ${project.name} (opens in a new tab)`);
          links.append(link);
        } else {
          const unavailable = makeElement("span", "disabled-link", `${label}: not published`);
          links.append(unavailable);
        }
      });
      card.append(links);
      projectGrid.append(card);
    });
    if (!projectGrid.children.length) projectGrid.append(makeElement("p", "muted", "Project details will appear here when configured."));
  }

  function renderGitHub() {
    const container = document.getElementById("github-contact");
    if (!container) return;
    const url = safeUrl(config.githubProfile);
    container.replaceChildren();
    if (url && new URL(url).hostname.toLowerCase() === "github.com") {
      const link = makeElement("a", "", "View GitHub profile ↗");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "View GitHub profile (opens in a new tab)");
      container.append(link);
    } else {
      container.append(makeElement("p", "muted", "GitHub profile link will be added when the profile URL is confirmed."));
    }
  }

  function renderNotes() {
    const container = document.getElementById("notes-links");
    if (!container) return;
    const notes = (config.technicalNotes || []).filter((note) => note && safeUrl(note.url));
    container.replaceChildren();
    if (!notes.length) {
      const p = makeElement("p", "muted");
      p.append(document.createTextNode("No public technical notes have been linked yet. Add a real URL in "));
      const code = makeElement("code", "", "config.js");
      p.append(code, document.createTextNode(" when one is available."));
      container.append(p);
      return;
    }
    notes.forEach((note) => {
      const p = makeElement("p");
      const link = makeElement("a", "", `${note.title || "Technical note"} ↗`);
      link.href = safeUrl(note.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `${note.title || "Technical note"} (opens in a new tab)`);
      p.append(link);
      container.append(p);
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  renderProjects();
  renderGitHub();
  renderNotes();
})();
