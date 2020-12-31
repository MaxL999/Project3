import axios from 'axios';

const API = {
    register: (username, password) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                data: {
                    username: username,
                    password: password
                },
                url: "http://localhost:3001/register",
            })
                .catch(err => reject(err))
                .then(res => resolve(res))
        })
    },
    login: (username, password) => {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:3001/login", { username: username, password: password })
                .catch(err => reject(err))
                .then(res => resolve(res))
        })
    },
}

export default API