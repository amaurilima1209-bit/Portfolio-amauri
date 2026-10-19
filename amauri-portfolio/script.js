// ============================================================
// CONFIGURAÇÃO DO PORTFÓLIO
// Edite os valores abaixo com seus links reais antes de publicar.
// ============================================================
const CONFIG = {
  github: "https://github.com/",       // Ex.: "https://github.com/seu-usuario"
  linkedin: "https://www.linkedin.com/", // Ex.: "https://www.linkedin.com/in/seu-perfil/"
  email: "" // Ex.: "amauri@email.com"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Links configuráveis
  const githubLink = document.getElementById("githubLink");
  const linkedinLink = document.getElementById("linkedinLink");
  if (githubLink && CONFIG.github) githubLink.href = CONFIG.github;
  if (linkedinLink && CONFIG.linkedin) linkedinLink.href = CONFIG.linkedin;

  // Menu mobile acessível
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const opening = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(opening));
      menuToggle.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
      siteNav.classList.toggle("is-open", opening);
      document.body.classList.toggle("menu-open", opening);
    });
    siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 680) closeMenu();
    });
  }

  // Animações de entrada: desligadas automaticamente se o usuário
  // preferir movimento reduzido no sistema operacional.
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Botão de e-mail: copia para área de transferência ou abre o app de e-mail.
  const emailButton = document.getElementById("emailButton");
  const emailText = document.getElementById("emailText");
  const copyFeedback = document.getElementById("copyFeedback");

  if (CONFIG.email && emailText) emailText.textContent = CONFIG.email;
  if (emailButton) {
    emailButton.addEventListener("click", async () => {
      if (!CONFIG.email) {
        if (emailText) emailText.textContent = "Adicione seu e-mail no script.js";
        if (copyFeedback) copyFeedback.textContent = "Abra script.js e preencha CONFIG.email.";
        return;
      }
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        if (copyFeedback) copyFeedback.textContent = "E-mail copiado para a área de transferência.";
      } catch {
        window.location.href = `mailto:${CONFIG.email}`;
      }
    });
  }

  // Atualiza o ano no rodapé sem precisar editar o HTML.
});
