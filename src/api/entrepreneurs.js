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

export function editedEntrepreneur(id, usernameInstagram, tel) {
    return instance.put('/person', { id, usernameInstagram, tel })
}
