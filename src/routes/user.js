var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/', (req, res) =>{
    console.log ('This is req');
    console.log (req.body);
    var user = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

    user.save( (err, result) => {
        if (err) {
            return res.status(500).json({
                title: 'Error Occured in Saving user details in DB',
                err: err
            });

        }

            res.status(201).json({
                message: 'User created in DB',
                result: result
            });
        
    });

});

router.post('/signin', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return res.status(401).json({
                title: 'Error in fetching User creds from DB',
                err: err
            });
        }

        if (!user) {
            return res.status(401).json({
                title: 'Login Failed',
                err: err
            });
        }
        
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login Failed',
                err: err
            });
        }
        var token = jwt.sign( {user}, 'secret', {expiresIn: 5200});
        res.status(200).json({
            message: 'Authentication Succesful!',
            token: token,
            userId: user._id
        });

    });
})

module.exports = router;