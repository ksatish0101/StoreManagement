import axios from 'axios'

const STORE = 'store'
const API_URL = 'http://localhost:8080'
const STORE_API_URL = `${API_URL}/${STORE}`

class StoreDataService {

    retrieveAllStores() {
        //console.log('executed service')
        return axios.get(`${STORE_API_URL}/stores`);
    }

    retrieveStore(id) {
        //console.log('executed service')
        return axios.get(`${STORE_API_URL}/${id}`);
    }

    deleteStore(id) {
        //console.log('executed service')
        return axios.delete(`${STORE_API_URL}/${id}`);
    }

    updateStore(id, store) {
        //console.log('executed service')
        return axios.put(`${STORE_API_URL}/${id}`, store);
    }

    createStore(store) {
        //console.log('executed service')
        return axios.post(`${STORE_API_URL}/new`, store);
    }
}

export default new StoreDataService()