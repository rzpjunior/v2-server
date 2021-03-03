var axios = require('axios');
var api = "http://13.228.194.85:8181/v1";


function login(credentials) {
    axios.post(api + '/auth', credentials)
        .then(response => response.data)
        .catch(error => {
        console.log(error)
        })
}

module.exports = {login}
