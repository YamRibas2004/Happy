import axios from 'axios'
import { deflate } from 'zlib'

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api