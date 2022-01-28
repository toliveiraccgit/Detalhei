export class CarouselTestes {
    constructor(anteriorTodosProdutos, proximoTodosProdutos, listaProdutosTodosProdutos, navegacaoTestesTodosProdutos) {
        this.anteriorTodosProdutos = document.querySelector(anteriorTodosProdutos)
        this.proximoTodosProdutos = document.querySelector(proximoTodosProdutos)
        this.listaProdutosTodosProdutos = document.querySelector(listaProdutosTodosProdutos)
        this.navegacaoTestesTodosProdutos = document.querySelector(navegacaoTestesTodosProdutos)

        this.indicadores = this.getListaIndicadores()


        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoTodosProdutos.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorTodosProdutos.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosTodosProdutos.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoTestesTodosProdutos.children)
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
        this.listaProdutosTodosProdutos.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

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