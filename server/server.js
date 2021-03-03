var port = process.env.PORT || 3030;
var token = 'test'
var http = require('http');
var express = require('express');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./modules/routes.js');
var api = require('./modules/api.js');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient({
    host: "ec2-54-254-254-225.ap-southeast-1.compute.amazonaws.com",
    port: 6379,
    no_ready_check: true,
    auth_pass: 'edenfarm.123'
  });
const redisStore = require('connect-redis')(session);


var app = express();

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
  });

app.use(session({
    secret: token,
    name: 'bearerToken',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
    },
    store: new redisStore({ client: redisClient, }),
}));


app.set('view engine', 'ejs');
app.use(compression());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(api);
app.use(routes); // route mesti di bawah api untuk deteksi undeclare route dan page 404

var server = http.createServer(app);
server.listen(port);
console.log('Server is running at localhost:' + port);