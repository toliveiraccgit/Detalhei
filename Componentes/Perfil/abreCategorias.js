function abrirCategorias (){
    categorias.style.opacity = ` 1 `
    categorias.style.display = ` flex `

    categorias.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaCategorias(){
    categorias.style.opacity = ` 0 `
    categorias.style.display = ` none `

    categorias.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const categorias = document.querySelector('#categorias-expandido')