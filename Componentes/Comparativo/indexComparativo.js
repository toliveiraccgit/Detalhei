import { CarouselComparativo } from "./carousselComparativo.js"

const anteriorComparativo = '[data-anterior-comparativo]'
const proximoComparativo = '[data-proximo-comparativo]'
const listaProdutosComparativo = '[data-lista-comparativo]'

new CarouselComparativo(anteriorComparativo, proximoComparativo, listaProdutosComparativo)



import { VerMaisComparativo } from "./verMaisComparativo.js"


window.onload = () => {
    const botaoVerMaisComparativo = document.querySelector('#botao__ver-mais-comparativo')
    const botaoVerMenosComparativo = document.querySelector('#botao__ver-menos-comparativo')

    const secaoComparativo = document.querySelector('#lista__pontos___comparativos')
 
    if (secaoComparativo.children.length <= 3) {
        botaoVerMaisComparativo.style.visibility = ` hidden `
        botaoVerMenosComparativo.style.visibility = ` hidden `

        secaoComparativo.style.height = ` auto `
    }

}


new VerMaisComparativo()