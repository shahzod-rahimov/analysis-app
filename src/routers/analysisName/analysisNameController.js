import catchAsync from '../../utility/catchAsync.js'
import AnalysisName from '../../models/AnalysisName.js'

export const getAll = catchAsync(async (req, res) => {
  const users = await AnalysisName.find()

  res.ok(200, users)
})

export const create = catchAsync(async (req, res) => {
  const users = await AnalysisName.create(req.body)

  res.ok(201, users)
})

// export const getByID = catchAsync(async (req, res) => {
//   const { id } = req.params

//   const analysis = await AnalysisName.aggregate([
//     { $match: { _id: id } },
//     { $project: { updatedAt: 0 } },
//     {
//       $lookup: {
//         from: 'users',
//         localField: 'user_id',
//         foreignField: '_id',
//         as: 'users',
//         pipeline: [{ $project: { updatedAt: 0 } }],
//       },
//     },
//   ])
//   res.ok(200, analysis)
// })
