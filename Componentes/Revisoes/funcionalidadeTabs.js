
const secaoRevisao = document.querySelector('.secao__revisoes___aba')

const posicaoRevisao = secaoRevisao.getBoundingClientRect()['y'];


const botaoTabRevisao = document.querySelector('.botao__tab___revisao')

function tabRevisao(){
    window.scrollTo(window.innerWidth , `${posicaoRevisao + 200}`)
}
