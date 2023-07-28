import { Schema, model } from 'mongoose'

const queueSchema = new Schema(
  {
    user_id: { type: Schema.ObjectId, ref: 'Users' },
    staff_id: { type: Schema.ObjectId, ref: 'Staff' },
    analysis_id: { type: Schema.ObjectId, ref: 'Analysis' },
  },
  { versionKey: false, timestamps: true },
)

export default model('queue', queueSchema)
