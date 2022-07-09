import mongoose from 'mongoose'
const URLSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true
  },
  originURL: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  }
})

export const URLModel = mongoose.model('url', URLSchema)
