import instance from './instance'


export function postNote(titulo, texto) {
    return instance.post('/notes', { titulo, texto })
}