const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const schema = new Schema({
  imagePath: {
    type: String,
    required: true,
    unique: true  
  },
  title: {
    type: String,
    required: true,
    unique: true  
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true, 
  }
});

module.exports = mongoose.model('Product', schema);
