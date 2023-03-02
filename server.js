const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

env.config();

const routes = require('./routes/patient');

let url = 'mongodb://localhost:27017/Patient';

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes);

mongoose.connect(url,{useNewUrlParser : true,useUnifiedTopology:true})
.then(() => {
    console.log('Database connected ...')
})
.catch((error) => {
    console.log(error.message)
})


app.listen(process.env.PORT,() => {
    console.log(`Server is running on the port : ${process.env.PORT}`)
})