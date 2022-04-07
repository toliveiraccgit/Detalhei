const secaoOfertasMobile = document.querySelector('.section__lista___ofertas-mobile')

const botaoAbreOfertasMobile = document.querySelector('#abre-lista-ofertas')
const botaoFechaOfertasMobile = document.querySelector('#fecha-lista-ofertas')


function abreOfertasMobile(){
    secaoOfertasMobile.style.display = ` flex `

    botaoAbreOfertasMobile.style.display = ` none `

    botaoFechaOfertasMobile.style.display = ` flex `
}

function fechaOfertasMobile(){
    secaoOfertasMobile.style.display = ` none `

    botaoAbreOfertasMobile.style.display = ` flex `

    botaoFechaOfertasMobile.style.display = ` none `
}