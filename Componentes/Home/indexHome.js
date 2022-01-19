import { CarouselAvaliacoes } from "./CarousselHome/carrouselHomeAvaliacoes.js"

const anteriorAvaliacoes = '[data-anterior-avaliacoes]'
const proximoAvaliacoes = '[data-proximo-avaliacoes]'
const listaProdutosAvaliacoes = '[data-lista-produtos-avaliacoes]'

new CarouselAvaliacoes(anteriorAvaliacoes, proximoAvaliacoes, listaProdutosAvaliacoes)



import { CarouselTestesTodosProdutos } from "./CarousselHome/carousselHomeTestesTodosProdutos.js"

const anteriorTodosProdutos = '[data-anterior-todos-produtos]'
const proximoTodosProdutos = '[data-proximo-todos-produtos]'
const listaProdutosTodosProdutos = '[data-lista-todos-produtos]'

new CarouselTestesTodosProdutos(anteriorTodosProdutos, proximoTodosProdutos, listaProdutosTodosProdutos)



import { CarouselTesteCozinha } from "./CarousselHome/carousselHomeTestesCozinha.js"

const anteriorCozinha = '[data-anterior-testes-cozinha]'
const proximoCozinha = '[data-proximo-testes-cozinha]'
const listaProdutosCozinha = '[data-lista-testes-cozinha]'

new CarouselTesteCozinha(anteriorCozinha, proximoCozinha, listaProdutosCozinha)
