import axios from "axios";

// instalei por pratica mas os dados vai ser puxados atravez de uma gambiarra que fiz com arrays

const api = axios.create({
    baseURL: 'http://localhost:3000'

})

export default api