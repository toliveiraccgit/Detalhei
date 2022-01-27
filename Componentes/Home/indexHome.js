import { CarouselAvaliacoes } from "./CarousselHome/carrouselHomeAvaliacoes.js"

const anteriorAvaliacoes = '[data-anterior-avaliacoes]'
const proximoAvaliacoes = '[data-proximo-avaliacoes]'
const listaProdutosAvaliacoes = '[data-lista-produtos-avaliacoes]'

new CarouselAvaliacoes(anteriorAvaliacoes, proximoAvaliacoes, listaProdutosAvaliacoes)



import { CarouselTestes } from "./CarousselHome/carousselHomeTestesTodosProdutos.js"

const anteriorTodosProdutos = '[data-anterior-todos-produtos]'
const proximoTodosProdutos = '[data-proximo-todos-produtos]'
const listaProdutosTodosProdutos = '[data-lista-todos-produtos]'

new CarouselTestes(anteriorTodosProdutos, proximoTodosProdutos, listaProdutosTodosProdutos)

import { CarouselCozinha } from "./CarousselHome/carousselHomeTestesCozinha.js"

const anteriorCozinha = '[data-anterior-cozinha]'
const proximoCozinha = '[data-proximo-cozinha]'
const listaProdutosCozinha = '[data-lista-cozinha]'

new CarouselCozinha(anteriorCozinha, proximoCozinha, listaProdutosCozinha)

import { CarouselOpinioes } from "./CarousselHome/carousselHomeOpinioes.js"

const anteriorOpinioes = '[data-anterior-opinioes]'
const proximoOpinioes = '[data-proximo-opinioes]'
const listaProdutosOpinioes = '[data-lista-opinioes]'

new CarouselOpinioes(anteriorOpinioes, proximoOpinioes, listaProdutosOpinioes)


import { CarouselDescricao } from "./CarousselHome/carousselHomeDescricao.js"

const anteriorDescricao = '[data-anterior-descricao]'
const proximoDescricao = '[data-proximo-descricao]'
const listaProdutosDescricao = '[data-lista-produtos-descricao]'

new CarouselDescricao(anteriorDescricao, proximoDescricao, listaProdutosDescricao)