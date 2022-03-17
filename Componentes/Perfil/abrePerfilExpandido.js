function abrirPerfil(){
    perfil.style.opacity = ` 1 `
    perfil.style.display = ` flex `

    perfil.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaPerfil(){
    perfil.style.opacity = ` 0 `
    perfil.style.display = ` none `

    perfil.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const perfil = document.querySelector('#perfil-expandido')