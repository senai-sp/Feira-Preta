import instance from './instance'


export function postLink(link) {
    return instance.post('/publication', { link }) //ENDPOINT
}
