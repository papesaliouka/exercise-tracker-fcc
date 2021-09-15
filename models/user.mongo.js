const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  exercises:[{
    description:{type:String},
    duration:{type:Number},
    date:{type:Date}
  }],
});



module.exports = mongoose.model('User', userSchema);;