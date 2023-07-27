import ApiError from '../errors/ApiError.js'

const catchAsync = (fn) => (req, res, next) => fn(req, res, next).catch((error) => ApiError.internal(res, error))

export default catchAsync
