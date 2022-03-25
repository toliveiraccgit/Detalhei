
const modalRemovidos = document.querySelector('.secao__aba___removidos')

function abrirRemovidosProduto(){
    if (modalRemovidos.style.display = ` none `) {
        modalRemovidos.style.display = ` flex `
        modalRemovidos.style.animation = ` animaRemovidos .5s ease-in-out forwards `
    }
}

function fechaRemovidosProduto(){
    modalRemovidos.style.display = ` none `
}