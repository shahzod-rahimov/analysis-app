import catchAsync from '../../utility/catchAsync.js'
import Staff from '../../models/Staff.js'

export const getAll = catchAsync(async (req, res) => {
  const staff = await Staff.find()

  res.ok(200, staff)
})

export const create = catchAsync(async (req, res) => {
  const staff = await Staff.create(req.body)

  res.ok(201, staff)
})

// export const getByID = catchAsync(async (req, res) => {
//   const { id } = req.params

//   const staff = await Staff.aggregate([
//     { $match: { _id: id } },
//     { $project: { updatedAt: 0 } },
//     {
//       $lookup: {
//         from: 'analyses',
//         localField: '_id',
//         foreignField: 'user_id',
//         as: 'analyses',
//         pipeline: [{ $project: { updatedAt: 0 } }],
//       },
//     },
//   ])

//   res.ok(200, staff)
// })
