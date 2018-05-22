import instance from './instance'


export function postLink(id, link) {
    return instance.put(`/publication/highlight/${id}`, { isHighlight: true })
}

export function postFeatures() {
    return instance.post('/publication/automatic')
}

export function editPublication(id, data) {
    return instance.put(`/publication/${id}`, data);
}

export function getLinks() {
    return instance.get('/publication/all')
}

export function deleteLink(id) {
    return instance.delete('/publication/' +  id )
}