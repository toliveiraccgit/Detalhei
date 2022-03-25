function abrirNewsletter (){
    newsletter.style.opacity = ` 1 `
    newsletter.style.display = ` flex `

    newsletter.style.animation = ` animaExpansao .3s ease-in-out forwards `
}

function fechaNewsletter(){
    newsletter.style.opacity = ` 0 `
    newsletter.style.display = ` none `

    newsletter.style.animation = ` animaFechaExpansao .3s ease-in-out backwards `
}

const newsletter = document.querySelector('#container-modal-newsletter')