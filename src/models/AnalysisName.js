import { Schema, model } from 'mongoose'

const analysisNameSchema = new Schema(
  {
    name: { type: String },
    price: { type: String },
  },
  { versionKey: false, timestamps: true },
)

export default model('analysisName', analysisNameSchema)
