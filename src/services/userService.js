import axios from "axios";

const baseUrl = 'http://110.44.119.188:4000/users'
const getToken = () => `bearer ${window.localStorage.getItem('token')}`

const register = (user) => {
    return axios.post(`${baseUrl}/register`, user)
}

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const getProfile = () => {
    return axios.get(`${baseUrl}/profile`, {
        headers: { Authorization: getToken() }
    })
}


const userService = {
    register, login, getProfile
}
export default userService 