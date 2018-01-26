var express = require('express');
var router = express.Router();
var Message =require('../models/message');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

//----------FETCHING MESAGES-------------//
router.get('/', (req, res, next)=> {
    Message.find()
    .populate('user', 'firstName')
    .exec( (err, rsltMessages) => {
        if (err) {
            res.status(500).json({
                title: 'Error in fetching records from MongoDB',
                error: err 
            });
        }
        res.status(200).json({
            message: 'Records Succesfully Fetched from DB',
            resultMsgArr: rsltMessages
        });
    });
})

//----------TOKEN VALIDATION SO ONLY AUTHENTICATED USERS CAN ACCESS BELOW METHODS-------------//

router.use('/', (req, res, next) => {
    jwt.verify(req.query.token, 'secret', (err, decodedToken) => {
        if(err) {
            return res.status(401).json({
                title: 'User not Authenticated!!',
                err: err
            });
        }
        console.log('It went to next');
        next();
    });
});


//----------ADDING MESAGES-------------//
router.post('/', (req, res, next) => {
    // Message.populate('user', 'firstName');
    // Message.find()
    // .populate('user', 'firstName');
  var decoded = jwt.decode(req.query.token);
  console.log('Post Method Decoded Token ===', decoded);
  User.findById(decoded.user._id, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'An error Occured',
        error: err
      });
    }

    console.log('found User from decoded token is ===', user);
    var message = new Message({
      content: req.body.content,
      user: user
    });

    message.save((err, result) => {
        console.log('inside message.save', result);
      if (err) {
        return res.status(500).json({
          title: 'An error Occured',
          error: err
        });
      }
      user.message.push(result);
      user.save();

      res.status(201).json({
        message: 'Message Succesfully Saved',
        obj: result
      });
    });

  });


});



//----------UPDATING MESAGES-------------//
router.patch('/:id', (req, res)=> {

    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if(err) {
            return res.status(500).json({
                title: 'An Error occured',
                err: err
            });
        }
        if(!message) {
            return res.status(500).json({
                title: 'Message not Found in DB!',
                error: {message: 'Message not found'}
            })
        }

        if( message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'User not Autherised to Edit!!'
            });
        }
        message.content = req.body.content;
        message.save( (err, result) => {
            if(err) {
                return res.status(500).json({
                    title: 'An error Occured in Saving!',
                    err: err
                })
            }
                res.status(200).json({
                    message: 'Message Succesfully Saved',
                    result: result
                })
        });
    })
});

//----------DELETING MESAGES-------------//

router.delete('/:id', (req, res) => {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if(err) {
            res.status(500).json({
                title: 'Error Occured!!',
                err: err
            });
        }

        if(!message) {
            res.status(500).json({
                title: 'Cannot find message with messageID' + id + 'in DB',
            })

            res.status(200).json({
                message: 'Message found in DB',
                result: message
            });
        }

        if( message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'User not Autherised to Delete!!'
            });
        }
        
            message.remove((err, result) => {
                if (err) {
                    console.log('Inside success of delete');
                    res.status(500).json({
                        title: 'Error deleting message from DB',
                        err: err
                    });
                }
                    res.status(200).json({
                        message: 'Message succesfuly deleted from DB',
                        result: result
                    });
                
            });
        
    });
});

module.exports = router;