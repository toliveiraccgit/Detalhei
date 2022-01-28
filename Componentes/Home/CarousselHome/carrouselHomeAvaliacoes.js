export class CarouselAvaliacoes {
    constructor(anteriorAvaliacoes, proximoAvaliacoes, listaProdutosAvaliacoes, navegacaoAvaliacoes) {
        this.anteriorAvaliacoes = document.querySelector(anteriorAvaliacoes)
        this.proximoAvaliacoes = document.querySelector(proximoAvaliacoes)
        this.listaProdutosAvaliacoes = document.querySelector(listaProdutosAvaliacoes)
        this.navegacaoAvaliacoes = document.querySelector(navegacaoAvaliacoes)

        this.indicadores = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoAvaliacoes.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorAvaliacoes.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosAvaliacoes.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoAvaliacoes.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }
    getIndiceAtual() {
        return this.indicadores[this.indiceDoSlideAtual]
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
        this.listaProdutosAvaliacoes.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo')

    indicadorSelecionado.classList.add('carousel__indicador--ativo')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}