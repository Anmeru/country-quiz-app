const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [{
    country: String,
    flagUrl: String,  // URL to the flag image
    options: [String],  // Options for the user to choose from
    answer: String      // Correct answer
  }]
});

module.exports = mongoose.model('Quiz', quizSchema);
