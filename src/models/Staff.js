import { Schema, model } from 'mongoose'

const staffSchema = new Schema(
  {
    full_name: String,
    phone: String,
    password: String,
    role: String,
    is_active: { type: Boolean, default: false },
    floor: String,
    room: String,
  },
  { versionKey: false, timestamps: true },
)

export default model('staff', staffSchema)
