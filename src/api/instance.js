import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://feirapreta-001-site1.ctempurl.com/api',
    baseURL: 'http://feira-black.herokuapp.com/api'
})

export default instance