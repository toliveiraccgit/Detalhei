function abrirMenuAberto(){
    menuAberto.style.display = ` flex `
}
function fechaMenuAberto(){
    menuAberto.style.display = ` none `
}

window.onclick = function(event) {
    if (event.target == menuAberto) {
        menuAberto.style.display = "none";
    }
  } 
  
  
const modalMenuAberto = document.querySelector('.secao__menu-aberto')
const menuAberto = document.querySelector('.container__menu-aberto')