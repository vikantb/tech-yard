// importing
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const PORT=process.env.PORT || 1111

// app config
const app = express()

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', router);

// listen to port
app.listen(PORT,()=>console.log(`Listening to localhost:${PORT}`))