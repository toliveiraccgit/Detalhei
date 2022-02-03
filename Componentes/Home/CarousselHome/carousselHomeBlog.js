export class CarouselBlog {
    constructor(anteriorBlog, proximoBlog, listaProdutosBlog, navegacaoBlog) {
        this.anteriorBlog = document.querySelector(anteriorBlog)
        this.proximoBlog = document.querySelector(proximoBlog)
        this.listaProdutosBlog = document.querySelector(listaProdutosBlog)
        this.navegacaoBlog = document.querySelector(navegacaoBlog)

        this.indicadoresOpiniao = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoBlog.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorBlog.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosBlog.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoBlog.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width - 60
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }
    getIndiceAtual() {
        return this.indicadoresOpiniao[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0
        }

        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        const indicadorAtual = this.getIndiceAtual()
        this.indiceDoSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()

        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosBlog.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo-blog')

    indicadorSelecionado.classList.add('carousel__indicador--ativo-blog')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}