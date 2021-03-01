import axios from 'axios';
const url = process.env.VUE_APP_API_URL;
export default {
    login(credentials) {
        return axios
            .post(url + '/auth', credentials)
            .then(response => response.data);
    },
    signUp(credentials) {
        return axios
            .post(url + 'sign-up/', credentials)
            .then(response => response.data);
    },
    getSecretContent() {
        return axios.get(url + 'secret-route/').then(response => response.data);
    }
};