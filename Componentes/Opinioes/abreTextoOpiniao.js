function abrirTextoOpiniao (){
    textoOpiniao.style.animation = ` animaTexto 1s ease-in-out forwards `
    botaoContinuarLendo.style.animation = ` animaBotao 1s ease-in-out forwards `
}

const textoOpiniao = document.querySelector('.container-overflow__texto___opiniao')
const botaoContinuarLendo = document.querySelector('.botao__continuar___lendo')