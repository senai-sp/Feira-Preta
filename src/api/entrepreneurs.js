import instance from './instance'

export function postEntrepreneurs(userName, phoneNumber) {
    return instance.post('/person', { userName, phoneNumber })
}

export function getEntrepreneurs() {
    return instance.get('/person')
}

export function deleteEntrepreneur(id) {
    return instance.delete('/person/' + id )
}

export function putEntrepreneur(id, phoneNumber, usernameInstagram) {
    return instance.put(`/person/${id}`, { id, phoneNumber, usernameInstagram })
}