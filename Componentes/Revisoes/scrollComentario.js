
const secaoComentario = document.querySelector('.secao__comentarios')

const posicaoComentario = secaoComentario.getBoundingClientRect()['y'];


const botaoTabComentario = document.querySelector('.botao__comentarios')

function tabComentario(){
    window.scrollTo(window.innerWidth , `${posicaoComentario}`)
}
