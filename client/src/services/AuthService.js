import axios from 'axios';
// const url = "http://13.228.194.85:8181/v1";
export default {
    login(credentials) {
        return axios
            .post('/auth', credentials)
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