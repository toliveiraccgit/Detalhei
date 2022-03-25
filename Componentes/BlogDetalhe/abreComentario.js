function abrirCriaComentario (){
    criaComentario.style.opacity = ` 1 `
    criaComentario.style.display = ` flex `

    criaComentario.style.animation = ` animaCaracteristicas .3s ease-in-out forwards `
}

function fechaCriaComentario(){
    criaComentario.style.opacity = ` 0 `
    criaComentario.style.display = ` none `

    criaComentario.style.animation = ` animaFechaCaracteristicas .3s ease-in-out backwards `
}

const criaComentario = document.querySelector('#modal__comentario___expandido')