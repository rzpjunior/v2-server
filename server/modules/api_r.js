var express = require('express');
var axios = require('axios');
var app = express();
var db = require('./database.js');
var moment = require('moment');
var apiJson = "https://jsonplaceholder.typicode.com";
var api = "http://13.228.194.85:8181/v1";

app.post('/auth', function (req, res) {
  axios.post(api + '/auth', {
    email: req.body.email,
    password: req.body.password
  }).then(response => {
    console.log(response.data)
    res.send(response.data);
  }).catch(error => {
    console.log(error)
  })
})

app.get('/test', function (req, res) {
  axios.get(apiJson + '/todos/1')
  .then(response => {
    console.log(response.data)
    res.send(response.data);
  })
  .catch(error => {
    console.log(error)
  })
});

app.post('/posts', function (req, res) {
  console.log('agsdaqwetqwrkontol')
  var newPost = {
    text: req.body.text,
    id: new Date().getTime(),
    date: moment().format('MMM Do, HH:mm')
  };

  if (req.body.text) {
    db.get('posts').push(newPost).write();
    res.send(newPost);
  } else {
    res.status(400).send(newPost);
  }
});

app.delete('/posts/:id', function (req, res) {
  var deleteResult = db.get('posts').remove({ id: parseInt(req.params.id, 10) }).write();

  if (deleteResult.length) {
    res.status(200).send(deleteResult);
  } else {
    res.status(400).send(deleteResult);
  }
});

module.exports = app;