import instance from './instance'


export function postLink(link) {
    return instance.post('/publication/highlight', { link })
}

export function postFeatures() {
    return instance.post('/publication/automatic')
}

export function getLinks() {
    return instance.get('/publication/all')
}

export function deleteLink(id) {
    return instance.delete('/publication/' +  id )
}