import mongoose from 'mongoose'

const alleycatSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  creator_name:{
    type: String,
    required: true
  },
  starts_at:{
    type: Date,
    required: true
  },
  ends_at:{
    type: Date,
    required: true
  },
  rules:{
    type: String,
    required: true
  },
  picture:{
    type: String,
  },
  ranking:{
    type: [{}]
  },
  checkpoints:{
    type:[{}]
  },
  subscribers:{
    type:[{}]
  }
})

export const Alleycat = mongoose.model('Alleycat', alleycatSchema)