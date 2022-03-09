
const secaoOpinioes = document.querySelector('.secao__texto___opiniao')

const posicaoOpiniao = secaoOpinioes.getBoundingClientRect()['y'];

const botaoTabOpiniao = document.querySelector('.botao__tab___opiniao')




function tabOpiniao(){
    window.scrollTo(window.innerWidth , `${posicaoOpiniao}`)
}

