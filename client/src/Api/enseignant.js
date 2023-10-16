import axios from 'axios'

const api_base_url = 'http://localhost:3001/api'
const axiosInstance = axios.create({
    baseURL: api_base_url,
    timeout: 10000,
})

const getAllEnseignantFront = async () => {
    try {
        const response = await axiosInstance.get(`/enseignant`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.error(err.message)
    }
}
getAllEnseignantFront()

