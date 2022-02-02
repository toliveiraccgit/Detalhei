export class CarouselTestes {
    constructor(anteriorTodosProdutos, proximoTodosProdutos, listaProdutosTodosProdutos) {
        this.anteriorTodosProdutos = document.querySelector(anteriorTodosProdutos)
        this.proximoTodosProdutos = document.querySelector(proximoTodosProdutos)
        this.listaProdutosTodosProdutos = document.querySelector(listaProdutosTodosProdutos)


        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoTodosProdutos.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorTodosProdutos.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()

        setInterval(this.proximoSlide.bind(this), 5000)
    }

    getListaSlides() {
        return Array.from(this.listaProdutosTodosProdutos.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width + 20
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
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosTodosProdutos.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }
    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}