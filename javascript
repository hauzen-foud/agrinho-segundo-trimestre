/* ==========================================
   FORMULÁRIO - MENSAGEM ELEGANTE
========================================== */

document.getElementById("formulario")
.addEventListener("submit", function(event){

    event.preventDefault();

    const botao = event.target.querySelector("button");

    botao.innerText = "Enviando...";

    setTimeout(() => {

        botao.innerText = "Enviar";

        alert("✅ Mensagem enviada com sucesso!\nObrigado pelo contato.");

        event.target.reset();

    }, 1200);

});


/* ==========================================
   BOTÃO "VOLTAR AO TOPO"
========================================== */

// Criar botão dinamicamente
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑ Topo";
botaoTopo.id = "topoBtn";

document.body.appendChild(botaoTopo);

// Estilo do botão via JS
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "12px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "10px";
botaoTopo.style.background = "#2e7d32";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

// Mostrar ao rolar
window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});

// Voltar ao topo suave
botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   DESTAQUE AUTOMÁTICO DO MENU (SCROLL)
========================================== */

const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo = window.scrollY;
        const offset = secao.offsetTop - 150;
        const altura = secao.offsetHeight;

        if(topo >= offset && topo < offset + altura){
            atual = secao.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if(link.getAttribute("href") === "#" + atual){
            link.classList.add("ativo");
        }

    });

});


/* ==========================================
   CONTADOR DE VISITANTES (FICTÍCIO)
========================================== */

let contador = 1200;

const contadorElemento = document.createElement("div");

contadorElemento.id = "contador-visitas";

contadorElemento.innerHTML = `👥 Visitantes: <strong>${contador}</strong>`;

document.body.appendChild(contadorElemento);

// estilo
contadorElemento.style.position = "fixed";
contadorElemento.style.top = "15px";
contadorElemento.style.left = "15px";
contadorElemento.style.background = "#1b5e20";
contadorElemento.style.color = "white";
contadorElemento.style.padding = "10px 15px";
contadorElemento.style.borderRadius = "10px";
contadorElemento.style.fontSize = "14px";
contadorElemento.style.zIndex = "999";


/* ==========================================
   ANIMAÇÃO AO ROLAR (EFEITO SIMPLES)
========================================== */

const elementos = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.6s ease";
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(20px)";
        }

    });

}, {
    threshold: 0.1
});

elementos.forEach(el => {

    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";

    observer.observe(el);

});
