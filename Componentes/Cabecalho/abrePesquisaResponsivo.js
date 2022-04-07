const secaoResultadoPesquisaMobile = document.querySelector('.secao__resultado___pesquisa-cabecalho-mobile')

const inputPesquisaMobile = document.querySelector('.input__busca-navegacao-mobile')

function abreResultadoPesquisaMobile(){
    secaoResultadoPesquisaMobile.style.display = ` flex `

}

function fechaResultadoPesquisaMobile(){
    secaoResultadoPesquisaMobile.style.display = ` none `

    inputPesquisaMobile.blur()
}
