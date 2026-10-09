(function () {
  const config = window.AUTO_LIFT_CONFIG || {};
  const display = (config.phoneDisplay || "").trim();
  const dial = (config.phoneDial || "").replace(/[^+\d]/g, "");
  const email = (config.businessEmail || "").trim();
  document.querySelectorAll(".call-label").forEach((el) => {
    if (display && dial) {
      el.textContent = display;
      if (el.tagName === "A") el.href = "tel:" + dial;
    } else {
      el.textContent = el.classList.contains("contact-callout") ? "Phone number to be added" : "Add your phone number";
      if (el.tagName === "A") el.href = "#contact";
      el.setAttribute("aria-label", "Business phone number needs to be configured before launch");
    }
  });
  if (email) {
    document.querySelectorAll("[data-business-email]").forEach((el) => {
      el.textContent = email;
      el.href = "mailto:" + email;
    });
  }
  if (config.websiteUrl) {
    const schema = document.getElementById("business-schema");
    if (schema) {
      try {
        const data = JSON.parse(schema.textContent);
        data.url = config.websiteUrl;
        if (dial) data.telephone = dial;
        if (email) data.email = email;
        schema.textContent = JSON.stringify(data);
      } catch (_) {}
    }
  }
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
