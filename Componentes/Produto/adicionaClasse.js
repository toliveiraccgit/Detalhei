const meta = document.createElement("link");

const head = document.head;

const botaoAtiva = document.querySelector('.botao-cards-ativa')

const botaoDesativa = document.querySelector('.botao-cards-desativa')

function criaClasse(){
    head.innerHTML += meta.innerHTML;
    head.appendChild(meta);

    meta.setAttribute('href', './CSS/Produtos/mudaCards.css');
    meta.setAttribute('rel', 'stylesheet');

    botaoAtiva.style.display = ` none `
    botaoDesativa.style.display = ` flex `
}

function removeClasse(){
    head.removeChild(meta);

    botaoAtiva.style.display = ` flex `
    botaoDesativa.style.display = ` none `
}
