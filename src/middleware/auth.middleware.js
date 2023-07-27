import jwt from '../services/JwtService.js'
import { Users } from '../models/Users.js'
import ApiError from '../errors/ApiError.js'

export default async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const { authorization } = req.headers

    if (!authorization) {
      return ApiError.unauthorized(res)
    }

    const token = authorization.split(' ')[1]

    if (!authorization.startsWith('Bearer') || !token) {
      console.log(1)
      return ApiError.unauthorized(res)
    }

    const decodedData = await jwt.verifyAccess(token)

    if (!decodedData) {
      return ApiError.unauthorized(res)
    }

    const data = await Users.findOne({ where: { id: decodedData.sub, isDeleted: false } })

    if (!data) {
      return ApiError.userNotFound(res)
    }

    req.user = decodedData

    return next()
  } catch (error) {
    console.log(error)
    return ApiError.jwtError(res, error.message)
  }
}
