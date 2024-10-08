const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['available', 'unavailable'],
        required: true,
      },

});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;