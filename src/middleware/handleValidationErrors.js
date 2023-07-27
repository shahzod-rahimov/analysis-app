import { validationResult, matchedData } from 'express-validator'
import ApiError from '../errors/ApiError.js'

export function handleValidationErrors(req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return ApiError.validation(res, errors.array())
  }

  req.body = matchedData(req, { locations: ['body'] })
  req.query = matchedData(req, { locations: ['query'] })
  req.params = matchedData(req, { locations: ['params'] })

  return next()
}
