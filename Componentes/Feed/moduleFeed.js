import { VerMaisEngajados } from "./verMaisEngajados.js"


window.onload = () => {
    const botaoVerMaisEngajados = document.querySelector('#botao__ver-mais-engajados')
    const botaoVerMenosEngajados = document.querySelector('#botao__ver-menos-engajados')

    const secaoEngajados = document.querySelector('#secao__lista-engajados')
 
    if (secaoEngajados.children.length <= 4) {
        botaoVerMaisEngajados.style.visibility = ` hidden `
        botaoVerMenosEngajados.style.visibility = ` hidden `

        secaoEngajados.style.height = ` auto `
    }

}


new VerMaisEngajados()

import { VerMaisSeguidores } from "./verMaisSeguidores.js"

window.onload = () => {
    const botaoVerMaisSeguidores = document.querySelector('#botao__ver-mais-seguidores')
    const botaoVerMenosSeguidores = document.querySelector('#botao__ver-menos-seguidores')

    const secaoSeguidores = document.querySelector('#secao__lista-seguidores')
 
    if (secaoSeguidores.children.length <= 7) {
        botaoVerMaisSeguidores.style.visibility = ` hidden `
        botaoVerMenosSeguidores.style.visibility = ` hidden `

        secaoSeguidores.style.height = ` auto `
    }

}

new VerMaisSeguidores()

import { VerMaisUltimasPostagens  } from "./verMaisUltimasPostagens.js"

window.onload = () => {
    const botaoVerMaisSeguidores = document.querySelector('#botao__ver-mais-ultimas-postagens')
    const botaoVerMenosSeguidores = document.querySelector('#botao__ver-menos-ultimas-postagens')

    const secaoSeguidores = document.querySelector('#secao__lista-ultimas-postagens')
 
    if (secaoSeguidores.children.length <= 5) {
        botaoVerMaisSeguidores.style.visibility = ` hidden `
        botaoVerMenosSeguidores.style.visibility = ` hidden `

        secaoSeguidores.style.height = ` auto `
    }

}

new VerMaisUltimasPostagens()