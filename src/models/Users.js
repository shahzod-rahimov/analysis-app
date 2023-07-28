import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    full_name: String,
    phone: String,
    birthday: Date,
  },
  { versionKey: false, timestamps: true },
)

export default model('users', userSchema)
