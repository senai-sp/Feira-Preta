import instance from './instance'


export function postEntrepreneurs(userName, phoneNumber) {
    return instance.post('URL', { userName, phoneNumber })
}