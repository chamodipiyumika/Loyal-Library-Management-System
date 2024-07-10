const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
      },
      Author: {
        type: String,
        required: true,
      },
      Copies: {
        type: Number,
        required: true,
      },
      Status: {
        type: String,
        enum: ['available', 'unavailable'],
        required: true,
      },

});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;