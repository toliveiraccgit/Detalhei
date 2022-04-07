const secaoComparativoMobile = document.querySelector('.secao__lista___comparativo-mobile')

const botaoAbreComparativoMobile = document.querySelector('#abre-lista-comparativo')
const botaoFechaComparativoMobile = document.querySelector('#fecha-lista-comparativo')


function abreComparativoMobile(){
    secaoComparativoMobile.style.display = ` flex `

    botaoAbreComparativoMobile.style.display = ` none `

    botaoFechaComparativoMobile.style.display = ` flex `
}

function fechaComparativoMobile(){
    secaoComparativoMobile.style.display = ` none `

    botaoAbreComparativoMobile.style.display = ` flex `

    botaoFechaComparativoMobile.style.display = ` none `
}