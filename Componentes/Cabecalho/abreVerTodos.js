const listaProdutosMenuAberto = document.querySelector('#lista__link___menu-aberto-produtos')

const botaoVerMais = document.querySelector('#botao-ver-mais-menu-aberto')
const botaoVerMenos = document.querySelector('#botao-ver-menos-menu-aberto')


function abreVerTodosProdutos(){

    listaProdutosMenuAberto.style.height = ` 25.326rem `
    listaProdutosMenuAberto.style.overflowY = ` scroll `

    botaoVerMais.style.display = ` none `
    botaoVerMenos.style.display = ` flex `
}

function fecharVerTodosProdutos(){

    listaProdutosMenuAberto.style.height = ` 18.326rem `
    listaProdutosMenuAberto.style.overflowY = ` hidden `

    botaoVerMais.style.display = ` flex `
    botaoVerMenos.style.display = ` none `
}