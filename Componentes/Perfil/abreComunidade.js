function abrirComunidade (){
    comunidade.style.opacity = ` 1 `
    comunidade.style.display = ` flex `

    comunidade.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaComunidade(){
    comunidade.style.opacity = ` 0 `
    comunidade.style.display = ` none `

    comunidade.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const comunidade = document.querySelector('#comunidade-expandido')