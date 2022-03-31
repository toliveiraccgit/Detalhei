const listaTop5 = document.querySelector('#link__menu-aberto___top-5')

const botaoVerTop5 = document.querySelector('#botao__link___abre-top5')
const botaoFecharTop5 = document.querySelector('#botao__link___fecha-top5')


function abreVerTop5(){

    listaTop5.style.height = ` 17rem `

    botaoVerTop5.style.display = ` none `
    botaoFecharTop5.style.display = ` flex `
}

function fecharVerTop5(){

    listaTop5.style.height = ` 1.563rem `

    botaoVerTop5.style.display = ` flex `
    botaoFecharTop5.style.display = ` none `
}