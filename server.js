const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

mongoose.connect('mongodb://localhost/meandb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const path = require('path');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/', apiRouter);

//static files
app.use(express.static(path.join(__dirname, '/public/dist/mean-demo')));


app.listen(3000, () => {
    console.log('Server on port 3000');
    
})