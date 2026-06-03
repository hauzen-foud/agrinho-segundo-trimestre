
let contador = document.getElementById("contador");
let valor = 0;

let animacao = setInterval(() => {
    valor++;

    contador.textContent = valor;

    if(valor >= 35){
        clearInterval(animacao);
    }
}, 50);

document.getElementById("formulario")
.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
