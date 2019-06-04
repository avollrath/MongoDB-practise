const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String
  },
  country: {
    type: String
  },
  age: {
    type: Number
  },
  courses: {
    type: []
  },
  skills: {
      type: []
  },
  createAt: {
    type: Date
  }
});

module.exports = Teacher = mongoose.model('teacher', teacherSchema);
