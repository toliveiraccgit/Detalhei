function abrirSeguidores (){
    seguidores.style.opacity = ` 1 `
    seguidores.style.display = ` flex `

    seguidores.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaSeguidores(){
    seguidores.style.opacity = ` 0 `
    seguidores.style.display = ` none `

    seguidores.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const seguidores = document.querySelector('#seguidores-expandido')