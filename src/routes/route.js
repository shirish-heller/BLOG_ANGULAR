var express = require('express');
var router = express.Router();  
var bodyParser = require('body-parser');
var User = require('../models/user');

router.get('/', (req, res, next)=> {
    // User.findOne({}, (err, document)=> {
    //     if (err) {
    //         return res.send('Error!!');
    //     }
        // res.render('node', {email: document.email});
        // res.sendFile('../views/index.hbs');
        res.render('index');
    });
module.exports = router;
