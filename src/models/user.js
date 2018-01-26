var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    message: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);