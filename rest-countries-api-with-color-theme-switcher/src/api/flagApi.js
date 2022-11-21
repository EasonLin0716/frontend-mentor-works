import config from './config.js'
const { baseURL, headers } = config

export default {
    getFlags() {
        return fetch(`${baseURL}/all`, {
            method: 'GET',
            headers,
        }).then(response => {
            if (response.status !== 200) {
                throw response.status
            } else {
                return response.json()
            }
        })
    },
    getFlagByName(name='') {
        return fetch(`${baseURL}/name/${name}`, {
            method: 'GET',
            headers,
        }).then(response => {
            if (response.status !== 200) {
                throw response.status
            } else {
                return response.json()
            }
        })
    },
    getFlagsByCodes(codes=[]) {
        return fetch(`${baseURL}/alpha?codes=${codes.join(',')}`, {
            method: 'GET',
            headers,
        }).then(response => {
            if (response.status !== 200) {
                throw response.status
            } else {
                return response.json()
            }
        })
    }
}