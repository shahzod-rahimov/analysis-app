import catchAsync from '../../utility/catchAsync.js'
import Users from '../../models/Users.js'

export const getAll = catchAsync(async (req, res) => {
  const users = await Users.find()

  res.ok(200, users)
})

export const create = catchAsync(async (req, res) => {
  const users = await Users.create(req.body)

  res.ok(201, users)
})

export const getByID = catchAsync(async (req, res) => {
  const { id } = req.params

  const user = await Users.aggregate([
    { $match: { _id: id } },
    { $project: { updatedAt: 0 } },
    {
      $lookup: {
        from: 'analyses',
        localField: '_id',
        foreignField: 'user_id',
        as: 'analyses',
        pipeline: [{ $project: { updatedAt: 0 } }],
      },
    },
  ])

  res.ok(200, user)
})
