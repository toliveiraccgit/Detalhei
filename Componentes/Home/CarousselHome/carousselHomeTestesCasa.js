export class CarouselCasa {
    constructor(anteriorCasa, proximoCasa, listaProdutosCasa) {
        this.anteriorCasa = document.querySelector(anteriorCasa)
        this.proximoCasa = document.querySelector(proximoCasa)
        this.listaProdutosCasa = document.querySelector(listaProdutosCasa)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoCasa.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorCasa.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosCasa.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
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
        this.listaProdutosCasa.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, n) => {
            slide.style.left = this.tamanhoSlide * n + 'px'
        })
    }
}