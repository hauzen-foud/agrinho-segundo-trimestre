```javascript
/* =====================================
   TECNOLOGIAS PARA REDUÇÃO DE DESPERDÍCIO
   JAVASCRIPT COMPLETO
===================================== */

// Mensagem de carregamento
window.addEventListener("load", () => {
    console.log("Site carregado com sucesso!");
});

/* =====================================
   BOTÕES DE IMAGEM
===================================== */

const botoesImagem = document.querySelectorAll("button");

botoesImagem.forEach(botao => {

    botao.addEventListener("click", () => {

        alert(
            "Área reservada para imagem.\n\n" +
            "Você poderá adicionar uma imagem relacionada a esta seção futuramente."
        );

    });

});

/* =====================================
   MENU ATIVO AO ROLAR A PÁGINA
===================================== */

const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 150;
        const altura = secao.clientHeight;

        if (scrollY >= topo) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksMenu.forEach(link => {

        link.style.background = "transparent";

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.style.background = "#43a047";
        }

    });

});

/* =====================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================== */

const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0px)";

            }

        });

    },

    {
        threshold: 0.15
    }

);

secoes.forEach((secao) => {

    secao.style.opacity = "0";
    secao.style.transform = "translateY(40px)";
    secao.style.transition = "all 0.8s ease";

    observador.observe(secao);

});

/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = "↑";

document.body.appendChild(voltarTopo);

voltarTopo.style.position = "fixed";
voltarTopo.style.bottom = "20px";
voltarTopo.style.right = "20px";
voltarTopo.style.width = "55px";
voltarTopo.style.height = "55px";
voltarTopo.style.borderRadius = "50%";
voltarTopo.style.border = "none";
voltarTopo.style.cursor = "pointer";
voltarTopo.style.fontSize = "24px";
voltarTopo.style.display = "none";
voltarTopo.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =====================================
   CONTADOR DE VISITA DA PÁGINA
===================================== */

let visitas = localStorage.getItem("visitas");

if (!visitas) {
    visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

console.log(
    "Número de visitas neste navegador: " +
    visitas
);

/* =====================================
   ANO AUTOMÁTICO NO RODAPÉ
===================================== */

const rodape = document.querySelector("footer");

if (rodape) {

    const ano = document.createElement("p");

    ano.innerHTML =
        "© " +
        new Date().getFullYear() +
        " - Projeto Educacional";

    rodape.appendChild(ano);

}

/* =====================================
   EFEITO NOS TÍTULOS
===================================== */

const titulos = document.querySelectorAll("h2");

titulos.forEach((titulo) => {

    titulo.addEventListener("mouseenter", () => {

        titulo.style.transform = "translateX(8px)";
        titulo.style.transition = "0.3s";

    });

    titulo.addEventListener("mouseleave", () => {

        titulo.style.transform = "translateX(0px)";

    });

});

/* =====================================
   MENSAGEM FINAL
===================================== */

console.log(
    "Sistema interativo carregado com sucesso."
);
```
