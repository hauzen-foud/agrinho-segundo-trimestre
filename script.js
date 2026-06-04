const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    btnTema.textContent =
    document.body.classList.contains("dark")
        ? "☀️ Tema Claro"
        : "🌙 Tema Escuro";
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
