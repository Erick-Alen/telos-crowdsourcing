const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
  email:{type: String, required: true, unique: true},
  password:{type: String, required: true},
  fullName:{type: String, required: true},
  cellphone:{type: String, required: true},
  birthDate:{type: Date, required: true}
})

UserSchema.pre('save', async(next) => {
  if(!this.isModified('password')){
    return next()
  }
  await bcrypt.hash(this.password, 8, (err, hash) =>{
    if(err){
      return next(err)
    }
    this.password = hash
    next()
  })
})

const User = mongoose.model('User', UserSchema)

module.exports = User
