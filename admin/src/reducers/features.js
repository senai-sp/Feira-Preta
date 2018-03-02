import { ADD_FEATURE } from '../actions'
// import Nota from '../nota'


export function notas(estadoAtual = [], acao) {
    switch(acao.type) {
        case ADD_FEATURE:
            const novaNota = new Nota(acao.posicao, acao.titulo, acao.texto)
            return estadoAtual.concat(novaNota)
        default:
            return estadoAtual
    }
}