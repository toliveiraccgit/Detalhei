function abrirCriaRespondeComentario (){
    criaRespondeComentario.style.opacity = ` 1 `
    criaRespondeComentario.style.display = ` flex `

    criaRespondeComentario.style.animation = ` animaCaracteristicas .3s ease-in-out forwards `
}

function fechaCriaRespondeComentario(){
    criaRespondeComentario.style.opacity = ` 0 `
    criaRespondeComentario.style.display = ` none `

    criaRespondeComentario.style.animation = ` animaFechaCaracteristicas .3s ease-in-out backwards `
}

const criaRespondeComentario = document.querySelector('#modal__responde-comentario___expandido')