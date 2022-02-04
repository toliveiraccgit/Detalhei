export class CarouselOpinioes {
    constructor(anteriorOpinioes, proximoOpinioes, listaProdutosOpinioes, navegacaoOpinioes) {
        this.anteriorOpinioes = document.querySelector(anteriorOpinioes)
        this.proximoOpinioes = document.querySelector(proximoOpinioes)
        this.listaProdutosOpinioes = document.querySelector(listaProdutosOpinioes)
        this.navegacaoOpinioes = document.querySelector(navegacaoOpinioes)

        this.indicadoresOpiniao = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoOpinioes.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorOpinioes.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosOpinioes.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoOpinioes.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width - 30
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
        this.listaProdutosOpinioes.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo-opiniao')

    indicadorSelecionado.classList.add('carousel__indicador--ativo-opiniao')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}