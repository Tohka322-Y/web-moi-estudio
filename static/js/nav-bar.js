
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const abierto =
            navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute("aria-expanded", String(!abierto));
        navToggle.setAttribute(
            "aria-label",
            abierto ? "Abrir menú" : "Cerrar menú"
        );

        navMenu.classList.toggle("is-open", !abierto);
    });

    // Cerrar al seleccionar un enlace
    navMenu.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Abrir menú");
        });
    });

    // Cerrar al pulsar Escape
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Abrir menú");
        }
    });
}
