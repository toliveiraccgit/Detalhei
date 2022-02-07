export class CarouselAvaliacoes {
    constructor(anteriorAvaliacoes, proximoAvaliacoes, listaProdutosAvaliacoes) {
        this.anteriorAvaliacoes = document.querySelector(anteriorAvaliacoes)
        this.proximoAvaliacoes = document.querySelector(proximoAvaliacoes)
        this.listaProdutosAvaliacoes = document.querySelector(listaProdutosAvaliacoes)


        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoAvaliacoes.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorAvaliacoes.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()

        setInterval(this.proximoSlide.bind(this), 5000)
    }

    getListaSlides() {
        return Array.from(this.listaProdutosAvaliacoes.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width + 30
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
        const slideAtual = this.getSlideAtual()
        this.indiceDoSlideAtual = posicao
        const slideSelecionado = this.getSlideAtual()

        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaOpacidadeSlides(slideAtual, slideSelecionado)
    }
    
    atualizaOpacidadeSlides(slideAtual, slideSelecionado){

        slideAtual.classList.remove('item__lista-opacidade')
        
        slideAtual.classList.add('item__lista-opacidade-0')
       
        slideSelecionado.classList.remove('item__lista-opacidade-0')
        
    }


    scrollParaSlide(slideSelecionado) {
        this.listaProdutosAvaliacoes.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'
    }
    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}