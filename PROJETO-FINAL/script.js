var btn = document.querySelector(".conteudo-principal-informacoes-botao");
var informacao = document.querySelector(".conteudo-principal-informacoes-escrito");

btn.addEventListener("click", function(){

    if(informacao.style.display === "none"){
        informacao.style.display = "block"
    } else {
        informacao.style.display = "none"
    }

});