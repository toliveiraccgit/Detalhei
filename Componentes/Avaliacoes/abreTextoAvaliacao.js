function abrirTextoAvaliacao (){
    textoAvaliacao.style.animation = ` animaTexto 1s ease-in-out forwards `
    botaoContinuarLendo.style.animation = ` animaBotao 1s ease-in-out forwards `
}

const textoAvaliacao = document.querySelector('.container-overflow__texto___avaliacao')
const botaoContinuarLendo = document.querySelector('.botao__continuar___lendo')