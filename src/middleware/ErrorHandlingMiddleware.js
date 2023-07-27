import ApiError from '../errors/ApiError.js'

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.log(err.message)
  if (err instanceof ApiError) {
    return res.error(err.status, { code: err.code, message: err.message }, err.data)
  }

  return res.error(500, { code: 12, message: 'UNEXPECTED_ERROR' })
}
