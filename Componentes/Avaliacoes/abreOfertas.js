function abrirOfertasExpandido (){
    ofertasExpandido.style.opacity = ` 1 `
    ofertasExpandido.style.display = ` flex `

    ofertasExpandido.style.animation = ` animaOfertas .3s ease-in-out forwards `
}

function fechaOfertasExpandido(){
    ofertasExpandido.style.opacity = ` 0 `
    ofertasExpandido.style.display = ` none `

    ofertasExpandido.style.animation = ` animaFechaOfertas .3s ease-in-out backwards `
}

const ofertasExpandido = document.querySelector('#ofertas__expandido')