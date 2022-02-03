export class CarouselDescricao {
    constructor(anteriorDescricao, proximoDescricao, listaProdutosDescricao, navegacaoDescricao) {
        this.anteriorDescricao = document.querySelector(anteriorDescricao)
        this.proximoDescricao = document.querySelector(proximoDescricao)
        this.listaProdutosDescricao = document.querySelector(listaProdutosDescricao)
        this.navegacaoDescricao = document.querySelector(navegacaoDescricao)

        this.indicadoresOpiniao = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoDescricao.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorDescricao.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosDescricao.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoDescricao.children)
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
        this.listaProdutosDescricao.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo-descricao')

    indicadorSelecionado.classList.add('carousel__indicador--ativo-descricao')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}