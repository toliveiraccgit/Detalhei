const secaoResultadoPesquisa = document.querySelector('.secao__resultado___pesquisa-cabecalho')

const inputPesquisa = document.querySelector('.input__busca-navegacao')

function abreResultadoPesquisa(){
    secaoResultadoPesquisa.style.display = ` flex `

}

function fechaResultadoPesquisa(){
    secaoResultadoPesquisa.style.display = ` none `

    inputPesquisa.blur()
}