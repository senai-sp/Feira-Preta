import instance from './instance'

export function getDashboard() {
    return instance.get('/eventscore')
}