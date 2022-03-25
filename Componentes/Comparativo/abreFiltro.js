function abrirFiltroProduto(){
    filtroProduto.style.display = ` flex `
    modalFiltro.style.animation = ` animaFiltro .5s ease-in-out forwards `
    
}
function fechaFiltroProduto(){
    filtroProduto.style.display = ` none `
}

window.onclick = function(event) {
    if (event.target == filtroProduto) {
        filtroProduto.style.display = "none";
    }
  } 

const modalFiltro = document.querySelector('.secao__filtros___produtos')
const filtroProduto = document.querySelector('.container__menu___filtros')