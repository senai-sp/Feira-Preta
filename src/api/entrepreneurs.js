import instance from './instance'


export function postEntrepreneurs(instaUser, phoneUser) {
    return instance.post('URL', { instaUser, phoneUser })
}