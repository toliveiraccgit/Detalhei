export class VerMaisSeguidores {

    constructor () {
        
        this.botaoVerMaisSeguidores = document.querySelector('#botao__ver-mais-seguidores')
        this.botaoVerMenosSeguidores = document.querySelector('#botao__ver-menos-seguidores')

        this.secaoSeguidores = document.querySelector('#secao__lista-seguidores')

        this.botaoVerMaisSeguidores.addEventListener('click', this.abriSecaoSeguidores.bind(this))

        this.botaoVerMenosSeguidores.addEventListener('click', this.fechaSecaoSeguidores.bind(this))
    }   
    
    abriSecaoSeguidores(){
        const botaoVerMaisSeguidores = this.botaoVerMaisSeguidores
        const botaoVerMenosSeguidores = this.botaoVerMenosSeguidores
        const secaoSeguidores = this.secaoSeguidores
        
        
        if (secaoSeguidores.children.length == 8) {
            secaoSeguidores.style.height = ` 29rem `
        }
        if (secaoSeguidores.children.length == 9) {
            secaoSeguidores.style.height = ` 32rem `
        }
        if (secaoSeguidores.children.length == 10) {
            secaoSeguidores.style.height = ` 36rem `
        }
        if (secaoSeguidores.children.length == 11) {
            secaoSeguidores.style.height = ` 40rem `
        }
        if (secaoSeguidores.children.length == 12) {
            secaoSeguidores.style.height = ` 44rem `
        }
        
        

        botaoVerMaisSeguidores.style.display = ` none `
        botaoVerMenosSeguidores.style.display = ` block `
    }

    fechaSecaoSeguidores(){
        const botaoVerMaisSeguidores = this.botaoVerMaisSeguidores
        const botaoVerMenosSeguidores = this.botaoVerMenosSeguidores
        const secaoSeguidores = this.secaoSeguidores

        
        secaoSeguidores.style.height = ` 25rem `
        

        botaoVerMaisSeguidores.style.display = ` block `
        botaoVerMenosSeguidores.style.display = ` none `
    }
}