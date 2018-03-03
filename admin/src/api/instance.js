import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://feirapreta-001-site1.ctempurl.com/api'
})

export default instance