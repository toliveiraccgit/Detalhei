export class CarouselTestes {
    constructor(anteriorTestes, proximoTestes, listaProdutosTestes, navegacaoTestes) {
        this.anteriorTestes = document.querySelector(anteriorTestes)
        this.proximoTestes = document.querySelector(proximoTestes)
        this.listaProdutosTestes = document.querySelector(listaProdutosTestes)
        this.navegacaoTestes = document.querySelector(navegacaoTestes)

        this.indicadores = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoTestes.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorTestes.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosTestes.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoTestes.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width - 60
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
        this.listaProdutosTestes.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

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