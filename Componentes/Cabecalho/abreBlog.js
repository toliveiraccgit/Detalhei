const listaBlog = document.querySelector('#link__menu-aberto___blog')

const botaoVerBlog = document.querySelector('#botao__link___abre-blog')
const botaoFecharBlog = document.querySelector('#botao__link___fecha-blog')


function abreVerBlog(){

    listaBlog.style.height = ` 30rem `

    botaoVerBlog.style.display = ` none `
    botaoFecharBlog.style.display = ` flex `
}

function fecharVerBlog(){

    listaBlog.style.height = ` 1.563rem `

    botaoVerBlog.style.display = ` flex `
    botaoFecharBlog.style.display = ` none `
}