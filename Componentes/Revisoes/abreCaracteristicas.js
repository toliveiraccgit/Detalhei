function abrirCaracteristicasExpandido (){
    caracteristicasExpandido.style.opacity = ` 1 `
    caracteristicasExpandido.style.display = ` flex `

    caracteristicasExpandido.style.animation = ` animaCaracteristicas .3s ease-in-out forwards `
}

function fechaCaracteristicasExpandido(){
    caracteristicasExpandido.style.opacity = ` 0 `
    caracteristicasExpandido.style.display = ` none `

    caracteristicasExpandido.style.animation = ` animaFechaCaracteristicas .3s ease-in-out backwards `
}

const caracteristicasExpandido = document.querySelector('#caracteristicas__expandido')