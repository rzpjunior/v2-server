var express = require('express');
var axios = require('axios');
var app = express();
var api = "http://13.228.194.85:8181/v1";

app.post('/auth', function (req, res) {
  axios.post(api + '/auth', {
    email: req.body.email,
    password: req.body.password
  }).then(response => {
    console.log(response.data.data.token)
    res.send(response.data);
  }).catch(error => {
    console.log(error)
  })
})

app.get('/inventory/uom', function (req, res) {
  axios.get(api + '/inventory/uom')
  .then(response => {
    console.log(response.data)
    res.send(response.data);
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = app;