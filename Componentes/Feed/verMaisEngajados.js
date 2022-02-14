export class VerMaisEngajados {

    constructor () {
        
        this.botaoVerMaisEngajados = document.querySelector('#botao__ver-mais-engajados')
        this.botaoVerMenosEngajados = document.querySelector('#botao__ver-menos-engajados')

        this.secaoEngajados = document.querySelector('#secao__lista-engajados')

        this.botaoVerMaisEngajados.addEventListener('click', this.abriSecaoEngajados.bind(this))

        this.botaoVerMenosEngajados.addEventListener('click', this.fechaSecaoEngajados.bind(this))
    }   
    
    abriSecaoEngajados(){
        const botaoVerMaisEngajados = this.botaoVerMaisEngajados
        const botaoVerMenosEngajados = this.botaoVerMenosEngajados
        const secaoEngajados = this.secaoEngajados
        
        
        if (secaoEngajados.children.length == 5) {
            secaoEngajados.style.height = ` 20.6rem `
        }
        if (secaoEngajados.children.length == 6) {
            secaoEngajados.style.height = ` 24.6rem `
        }
        if (secaoEngajados.children.length == 7) {
            secaoEngajados.style.height = ` 28.6rem `
        }
        if (secaoEngajados.children.length == 8) {
            secaoEngajados.style.height = ` 32.6rem `
        }
        
        

        botaoVerMaisEngajados.style.display = ` none `
        botaoVerMenosEngajados.style.display = ` block `
    }

    fechaSecaoEngajados(){
        const botaoVerMaisEngajados = this.botaoVerMaisEngajados
        const botaoVerMenosEngajados = this.botaoVerMenosEngajados
        const secaoEngajados = this.secaoEngajados

        
        secaoEngajados.style.height = ` 15.6rem `
        

        botaoVerMaisEngajados.style.display = ` block `
        botaoVerMenosEngajados.style.display = ` none `
    }
}