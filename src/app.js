const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRoute = require('../routes/indexRoute');
const userRoute = require('../routes/users');
const linksRoute = require('../routes/links')

const { connectionString } = require('../config');
const connect = mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
if (connect) {
    console.log("SERVER UP");
} else {
    console.log("SERVER DOWN");
}

const port = 3003;
app.set('port', port);
app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

console.log(`API RODANDO NA PORTA { ${port} }`);

//setando as portas 
app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/links',linksRoute);