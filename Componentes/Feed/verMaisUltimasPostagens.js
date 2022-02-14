export class VerMaisUltimasPostagens {

    constructor () {
        
        this.botaoVerMaisUltimasPostagens = document.querySelector('#botao__ver-mais-ultimas-postagens')
        this.botaoVerMenosUltimasPostagens = document.querySelector('#botao__ver-menos-ultimas-postagens')

        this.secaoUltimasPostagens = document.querySelector('#secao__lista-ultimas-postagens')

        this.botaoVerMaisUltimasPostagens.addEventListener('click', this.abriSecaoUltimasPostagens.bind(this))

        this.botaoVerMenosUltimasPostagens.addEventListener('click', this.fechaSecaoUltimasPostagens.bind(this))
    }   
    
    abriSecaoUltimasPostagens(){
        const botaoVerMaisUltimasPostagens = this.botaoVerMaisUltimasPostagens
        const botaoVerMenosUltimasPostagens = this.botaoVerMenosUltimasPostagens
        const secaoUltimasPostagens = this.secaoUltimasPostagens
        
        
        if (secaoUltimasPostagens.children.length == 6) {
            secaoUltimasPostagens.style.height = ` 21rem `
        }
        if (secaoUltimasPostagens.children.length == 7) {
            secaoUltimasPostagens.style.height = ` 25rem `
        }
        if (secaoUltimasPostagens.children.length == 8) {
            secaoUltimasPostagens.style.height = ` 29rem `
        }
        
        

        botaoVerMaisUltimasPostagens.style.display = ` none `
        botaoVerMenosUltimasPostagens.style.display = ` block `
    }

    fechaSecaoUltimasPostagens(){
        const botaoVerMaisUltimasPostagens = this.botaoVerMaisUltimasPostagens
        const botaoVerMenosUltimasPostagens = this.botaoVerMenosUltimasPostagens
        const secaoUltimasPostagens = this.secaoUltimasPostagens

        
        secaoUltimasPostagens.style.height = ` 17rem `
        

        botaoVerMaisUltimasPostagens.style.display = ` block `
        botaoVerMenosUltimasPostagens.style.display = ` none `
    }
}