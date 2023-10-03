import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  createdAlleycats:{
    type: [{}],
  }
})

export const User = mongoose.model('User', userSchema)