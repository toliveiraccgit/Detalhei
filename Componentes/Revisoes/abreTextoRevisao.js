function abrirTextoRevisao (){
    textoRevisao.style.animation = ` animaTexto 1s ease-in-out forwards `
    botaoContinuarLendo.style.animation = ` animaBotao 1s ease-in-out forwards `
}

const textoRevisao = document.querySelector('.container-overflow__texto___revisao')
const botaoContinuarLendo = document.querySelector('.botao__continuar___lendo')