
const modalComparativo = document.querySelector('.secao__aba___comparativos')
const inputCheck = document.querySelector('.input__aceitar-termos')
    

function abrirComparativoProduto(){
    if (modalComparativo.style.display = ` none `) {
        modalComparativo.style.display = ` flex `
        modalComparativo.style.animation = ` animaComparativos .5s ease-in-out forwards `
    }

    inputCheck.checked
}

function fechaComparativoProduto(){
    modalComparativo.style.display = ` none `

    inputCheck.checked = false
}