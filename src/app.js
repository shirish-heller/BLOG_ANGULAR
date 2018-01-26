var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/route');
var userRoutes = require('./routes/user');
var messageRoutes = require('./routes/message');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://<Shirish Heller>:<shirish@shiva99>@ds135946.mlab.com:35946/heller_db');

var cons = require('consolidate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use("/node_modules", express.static('node_modules'));
app.use(express.static('public'));

//Done to make view engine as HTML if u directly set view engine to html it wont work....also npm install swig and npm install consolidate required
 app.engine('html', cons.swig); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/', appRoutes);
//catch 404         //? How is this for Error Understand meaning of this functiom
app.use((req,res,next)=> {
    return res.render('index');  //This will return us to main index page in case someone tries to type localhost://5000/anything since we did not define that route in node it will throw a 404
});

module.exports = app;