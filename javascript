/* Formulário simples */

document.getElementById("formulario")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    event.target.reset();

});
