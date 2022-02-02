import { CarouselAvaliacoes } from "./CarousselHome/carrouselHomeAvaliacoes.js"

const anteriorAvaliacoes = '[data-anterior-avaliacoes]'
const proximoAvaliacoes = '[data-proximo-avaliacoes]'
const listaProdutosAvaliacoes = '[data-lista-produtos-avaliacoes]'
const navegacaoAvaliacoes = '[data-navegacao-avaliacoes]'

new CarouselAvaliacoes(anteriorAvaliacoes, proximoAvaliacoes, listaProdutosAvaliacoes, navegacaoAvaliacoes)



import { CarouselTestes } from "./CarousselHome/carousselHomeTestesTodosProdutos.js"

const anteriorTodosProdutos = '[data-anterior-todos-produtos]'
const proximoTodosProdutos = '[data-proximo-todos-produtos]'
const listaProdutosTodosProdutos = '[data-lista-todos-produtos]'

new CarouselTestes(anteriorTodosProdutos, proximoTodosProdutos, listaProdutosTodosProdutos)


import { CarouselOpinioes } from "./CarousselHome/carousselHomeOpinioes.js"

const anteriorOpinioes = '[data-anterior-opinioes]'
const proximoOpinioes = '[data-proximo-opinioes]'
const listaProdutosOpinioes = '[data-lista-opinioes]'
const navegacaoOpinioes = '[data-navegacao-opinioes]'

new CarouselOpinioes(anteriorOpinioes, proximoOpinioes, listaProdutosOpinioes, navegacaoOpinioes)


import { CarouselDescricao } from "./CarousselHome/carousselHomeDescricao.js"

const anteriorDescricao = '[data-anterior-descricao]'
const proximoDescricao = '[data-proximo-descricao]'
const listaProdutosDescricao = '[data-lista-produtos-descricao]'
const navegacaoDescricao = '[data-navegacao-descricoes]'

new CarouselDescricao(anteriorDescricao, proximoDescricao, listaProdutosDescricao, navegacaoDescricao)

import { CarouselBlog } from "./CarousselHome/carousselHomeBlog.js"

const anteriorBlog = '[data-anterior-blog]'
const proximoBlog = '[data-proximo-blog]'
const listaProdutosBlog = '[data-lista-produtos-blog]'
const navegacaoBlog = '[data-navegacao-blog]'

new CarouselBlog(anteriorBlog, proximoBlog, listaProdutosBlog, navegacaoBlog)