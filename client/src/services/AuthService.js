import axios from 'axios';
// const url = process.env.VUE_APP_API_URL;
export default {
    login(credentials) {
        return axios
            .post('/auth', credentials)
            .then(response => response.data);
    },
};