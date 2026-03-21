const year = document.getElementById("year");
if (year) {
  year.textContent = `${new Date().getFullYear()} Portfolio`;
}

const path = window.location.pathname.split("/").pop() || "index.html";
const currentPage = path === "" || path === "index.html" ? "index" : path.replace(".html", "");

document.querySelectorAll("[data-page]").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});

const body = document.body;
const zenToggle = document.getElementById("zenToggle");
const exitZen = document.getElementById("exitZen");
const zenFrame = document.getElementById("zenFrame");

const syncInteractiveMode = (active) => {
  if (!zenFrame?.contentWindow) return;

  try {
    if (typeof zenFrame.contentWindow.setInteractiveMode === "function") {
      zenFrame.contentWindow.setInteractiveMode(active);
    }
  } catch {
    // Ignore direct access failures and fall back to postMessage.
  }

  zenFrame.contentWindow.postMessage({ type: "portfolio-interactive-mode", active }, "*");
};

const setZenMode = (active) => {
  if (!body.classList.contains("home-page")) return;

  body.classList.toggle("zen-mode", active);

  if (zenToggle) {
    zenToggle.setAttribute("aria-expanded", String(active));
  }

  syncInteractiveMode(active);
};

if (zenFrame) {
  zenFrame.addEventListener("load", () => {
    syncInteractiveMode(body.classList.contains("zen-mode"));
  });
}

if (zenToggle) {
  zenToggle.addEventListener("click", () => {
    setZenMode(true);
  });
}

if (exitZen) {
  exitZen.addEventListener("click", () => {
    setZenMode(false);
  });
}

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const tagName = target instanceof HTMLElement ? target.tagName : "";
  const typing =
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT" ||
    (target instanceof HTMLElement && target.isContentEditable);

  if (typing) return;

  if (event.key === "Escape" && body.classList.contains("zen-mode")) {
    setZenMode(false);
    return;
  }

  const shortcuts = {
    0: "index.html",
    1: "projects.html",
    2: "experience.html",
    3: "contact.html",
  };

  const destination = shortcuts[event.key];
  if (destination) {
    window.location.href = destination;
  }
});
