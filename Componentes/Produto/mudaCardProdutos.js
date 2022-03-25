const cardsAvaliacao = document.getElementById('card__avaliacao')
const cardsRevisao = document.getElementById('card__revisao')
const cardsOpiniao = document.getElementById('card__opiniao')
const cardsDescricao = document.getElementById('card__descricao')

const listaCards = document.querySelector('.secao__cards___produtos')

const infoCards = document.querySelector('.secao__info___card-produto')
const containerInfoCard = document.querySelector('.container__info___card-produto')

const secaoPontos = document.querySelector('.secao__pontos___produto')

const containerTexto = document.querySelector('.container__texto___card-produto')

const topicosProdutos = document.querySelector('.container__topicos-produto')

const custoBeneficio = document.querySelector('.container__custo___beneficio')

const texto = document.querySelector('.titulo__texto___produto')
    
function mudaCard(){
    listaCards.style.flexDirection = ` row `
    listaCards.style.flexWrap = ` wrap `

    /*------------------WIDTH-----------------*/
    cardsAvaliacao.style.width = ` 20.938rem `
    cardsRevisao.style.width = ` 20.938rem `
    cardsOpiniao.style.width = ` 20.938rem `
    cardsDescricao.style.width = ` 20.938rem `

    /*-----------------PADDING---------------*/
    cardsAvaliacao.style.paddingLeft = ` 0.75rem `
    cardsRevisao.style.paddingLeft = ` 0.75rem `
    cardsOpiniao.style.paddingLeft = ` 0.75rem `
    cardsDescricao.style.paddingLeft = ` 0.75rem `

    cardsAvaliacao.style.paddingRight = ` 0.75rem `
    cardsRevisao.style.paddingRight = ` 0.75rem `
    cardsOpiniao.style.paddingRight = ` 0.75rem `
    cardsDescricao.style.paddingRight = ` 0.75rem `

    cardsAvaliacao.style.paddingBottom = ` 1.938rem `
    cardsRevisao.style.paddingBottom = ` 1.938rem `
    cardsOpiniao.style.paddingBottom = ` 1.938rem `
    cardsDescricao.style.paddingBottom = ` 1.938rem `

    /*-------------------INFO----------------*/
    infoCards.style.flexDirection =  ` column `;
    containerInfoCard.style.flexDirection =  ` column `;

    /*------------------PONTOS---------------*/
    secaoPontos.style.display = ` none `

    /*------------------TEXTO----------------*/
    containerTexto.style.alignItems = ` center `

    /*-----------------TOPICOS---------------*/
    topicosProdutos.style.display = ` none `

    /*------------------CUSTO----------------*/
    custoBeneficio.style.width = ` 17.4rem `

    /*-----------------TEXTO-----------------*/
    texto.style.width = ` 17.4rem `
}