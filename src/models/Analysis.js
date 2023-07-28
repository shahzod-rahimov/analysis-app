import { Schema, model } from 'mongoose'

const analysisSchema = new Schema(
  {
    analysis_name_id: { type: Schema.ObjectId, ref: 'AnalysisName' },
    user_id: { type: Schema.ObjectId, ref: 'Users' },
    staff_id: { type: Schema.ObjectId, ref: 'Staff' },
    status: { type: Boolean, default: false },
    file: { type: String },
  },
  { versionKey: false, timestamps: true },
)

export default model('analyses', analysisSchema)
