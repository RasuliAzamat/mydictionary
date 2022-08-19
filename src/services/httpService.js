import axios from "axios";

class HTTPService {
    constructor(baseURL) {
        this.url = baseURL
    }

    async fetchData() {
        try {
            const { data } = await axios.get(`${this.url}/words.json`)

            return data
        } catch (error) {
            throw error
        }
    }

    async postData(data) {
        try {
            await axios.post(`${this.url}/words.json`, data)
        } catch (error) {
            throw error
        }
    }

    async deleteById(id) {
        try {
            await axios.delete(`${this.url}/words/${id}.json`)
        } catch (error) {
            throw error
        }
    }

}

export const httpService = new HTTPService('https://mydictionary-app-default-rtdb.firebaseio.com')