export class VerMaisComparativo {

    constructor () {
        
        this.botaoVerMaisComparativo = document.querySelector('#botao__ver-mais-comparativo')
        this.botaoVerMenosComparativo = document.querySelector('#botao__ver-menos-comparativo')

        this.secaoComparativo = document.querySelector('#lista__pontos___comparativos')
        

        this.botaoVerMaisComparativo.addEventListener('click', this.abriSecaoComparativo.bind(this))

        this.botaoVerMenosComparativo.addEventListener('click', this.fechaSecaoComparativo.bind(this))
    }   
    
    abriSecaoComparativo(){
        const botaoVerMaisComparativo = this.botaoVerMaisComparativo
        const botaoVerMenosComparativo = this.botaoVerMenosComparativo
        const secaoComparativo = this.secaoComparativo
        
        secaoComparativo.style.height = ` 100% `
        

        botaoVerMaisComparativo.style.display = ` none `
        botaoVerMenosComparativo.style.display = ` block `
    }

    fechaSecaoComparativo(){
        const botaoVerMaisComparativo = this.botaoVerMaisComparativo
        const botaoVerMenosComparativo = this.botaoVerMenosComparativo
        const secaoComparativo = this.secaoComparativo

        
        secaoComparativo.style.height = ` 8.7rem `
        

        botaoVerMaisComparativo.style.display = ` block `
        botaoVerMenosComparativo.style.display = ` none `
    }
}