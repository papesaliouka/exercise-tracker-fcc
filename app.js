const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(morgan('combined'))
require('dotenv').config();

const userRouter = require('./routes/users/users.router');


app.use(cors());
app.use(express.static('public'));
app.use(bodyParser('extended'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'views','index.html'))
});

app.use('/api/users', userRouter);




module.exports = app;