export class CarouselComparativo {
    constructor(anteriorComparativo, proximoComparativo, listaProdutosComparativo) {
        this.anteriorComparativo = document.querySelector(anteriorComparativo)
        this.proximoComparativo = document.querySelector(proximoComparativo)
        this.listaProdutosComparativo = document.querySelector(listaProdutosComparativo)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoComparativo.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorComparativo.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosComparativo.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width - 60
    }
    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
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
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }
    scrollParaSlide(slideSelecionado) {
        this.listaProdutosComparativo.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }
    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}