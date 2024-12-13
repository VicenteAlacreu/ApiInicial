const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const {json} = require('express');
const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/v1/movies', require('./routes/movie.routes'))
app.use('/',(req, res) => res.status(400).json({status: 'API is in /api/v1/movies'})); //Se pone la ultima

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})