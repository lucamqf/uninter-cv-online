// Sistema de navegação compartilhado
const navigationLinks = [
  { href: "index.html", text: "Início", id: "início" },
  { href: "sobre.html", text: "Sobre", id: "sobre" },
  { href: "formacao.html", text: "Formação", id: "formacao" },
  { href: "portifolio.html", text: "Portifólio", id: "portifolio" },
  { href: "contato.html", text: "Contato", id: "contato" },
];

function createSharedNavigation() {
  const nav = document.getElementById("shared-navigation");
  if (!nav) return;

  const ul = document.createElement("ul");
  ul.className = "nav-links";

  navigationLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.id = link.id;

    // Atualiza o histórico do navegador para evitar o back button
    a.onclick = () => history.replaceState(null, "", link.href);

    // Marca o link ativo baseado na página atual
    if (
      window.location.pathname.includes(link.href) ||
      (link.href === "index.html" && window.location.pathname.endsWith("/"))
    ) {
      a.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
}

// Inicializa a navegação quando a página carrega
document.addEventListener("DOMContentLoaded", createSharedNavigation);
