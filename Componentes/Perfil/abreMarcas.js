function abrirMarcas (){
    marcas.style.opacity = ` 1 `
    marcas.style.display = ` flex `

    marcas.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaMarcas(){
    marcas.style.opacity = ` 0 `
    marcas.style.display = ` none `

    marcas.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const marcas = document.querySelector('#marcas-expandido')