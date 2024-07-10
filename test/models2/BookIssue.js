const mongoose = require('mongoose');

const BookIssueSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
      },
      IssuedUser: {
        type: String,
        required: true,
      },
      IssuedDate: {
        type: String,
        required: true,
      },
      Payement: {
        type: double,
        enum: ['available', 'unavailable'],
        required: true,
      },

});

const BookIssue = mongoose.model('BookIssues', BookIssueSchema);

module.exports = BookIssue;