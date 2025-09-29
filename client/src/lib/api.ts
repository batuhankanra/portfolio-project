import axios, {  type AxiosInstance } from "axios";
import Cookies from "js-cookie"


const api:AxiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:1000
})

api.interceptors.request.use(
    (config)=>{
        const token =Cookies.get("token")
        if(token && config.headers){
            config.headers['Authorization']=`Bearer ${token}`
        }
        return config
    },
    (error)=>Promise.reject(error)
)
export default api