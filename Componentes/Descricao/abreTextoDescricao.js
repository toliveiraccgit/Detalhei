function abrirTextoDescricao (){
    textoDescricao.style.animation = ` animaTexto 1s ease-in-out forwards `
    botaoContinuarLendo.style.animation = ` animaBotao 1s ease-in-out forwards `
}

const textoDescricao = document.querySelector('.container-overflow__texto___descricao')
const botaoContinuarLendo = document.querySelector('.botao__continuar___lendo')