var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var schema = new Schema({
    content: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', (msg) => {
    User.findById(msg.user, (err, user) => {
        if (err) {
            console.log('This is error from schema.post', err);
        }
        user.message.pull(msg);
        user.save();
    });
});


module.exports = mongoose.model('Message', schema);
