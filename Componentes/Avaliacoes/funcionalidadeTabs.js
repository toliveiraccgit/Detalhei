const secaoAvaliacao = document.querySelector('.secao__texto___avaliacao')

const secaoRevisao = document.querySelector('.secao__revisoes___aba')

const secaoOpinioes = document.querySelector('.secao__opnioes')



const posicaoAvaliacao = secaoAvaliacao.getBoundingClientRect()['y'];

const posicaoRevisao = secaoRevisao.getBoundingClientRect()['y'];

const posicaoOpiniao = secaoOpinioes.getBoundingClientRect()['y'];


const botaoTabAvaliacao = document.querySelector('.botao__tab___avaliacao')


const botaoTabRevisao = document.querySelector('.botao__tab___revisao')


const botaoTabOpiniao = document.querySelector('.botao__tab___opiniao')




function tabAvaliacao(){
    window.scrollTo(window.innerWidth , `${-posicaoAvaliacao}` )
}


function tabRevisao(){
    window.scrollTo(window.innerWidth , `${posicaoRevisao}`)
}


function tabOpiniao(){
    window.scrollTo(window.innerWidth , `${posicaoOpiniao}`)
}

console.log(posicaoAvaliacao , posicaoOpiniao, posicaoRevisao)