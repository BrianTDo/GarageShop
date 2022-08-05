const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        require: [true, 'Please add a last name']
    },
    email: {
        type: String,
        require: [true, 'Please add a email'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Please add a password']
    },
})
module.exports = mongoose.model('user', userSchema)