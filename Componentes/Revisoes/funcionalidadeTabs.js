
const secaoRevisao = document.querySelector('.secao__revisoes___aba')

const posicaoRevisao = secaoRevisao.getBoundingClientRect()['y'];

const botaoTabRevisao = document.querySelector('.botao__tab___revisao')



const secaoOpinioes = document.querySelector('.secao__opnioes')

const posicaoOpiniao = secaoOpinioes.getBoundingClientRect()['y'];

const botaoTabOpiniao = document.querySelector('.botao__tab___opiniao')




function tabOpiniao(){
    window.scrollTo(window.innerWidth , `${posicaoOpiniao}`)
}

function tabRevisao(){
    window.scrollTo(window.innerWidth , `${posicaoRevisao + 200}`)
}
