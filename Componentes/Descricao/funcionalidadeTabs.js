
const secaoDescricao = document.querySelector('.secao__texto___descricao')

const posicaoDescricao = secaoDescricao.getBoundingClientRect()['y'];

const botaoTabDescricao = document.querySelector('.botao__tab___descricao')


function tabDescricao(){
    window.scrollTo(window.innerWidth , `${posicaoDescricao}`)
}

