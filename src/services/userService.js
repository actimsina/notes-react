import axios from "axios";

const baseUrl = 'http://110.44.119.188:4000/users'

const register = (user) => {
    return axios.post(`${baseUrl}/register`, user)
}

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const userService = {
    register, login
}
export default userService 