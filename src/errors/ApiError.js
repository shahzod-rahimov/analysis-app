export default class ApiError extends Error {
  constructor(status, message, code, data) {
    super()
    this.status = status
    this.message = message
    this.code = code
    this.data = data
  }

  static internal(res, errorMessage) {
    console.log(errorMessage)
    return res.error(500, { code: 1, message: 'INTERNAL_SERVER_ERROR' })
  }

  static unauthorized(res) {
    return res.error(401, { code: 2, message: 'UNAUTHORIZED' })
  }

  static validation(res, errorMessage) {
    return res.error(422, { code: 3, message: 'VALIDATION_ERROR' }, errorMessage)
  }

  static forbidden(res) {
    return res.error(403, { code: 4, message: 'FORBIDDEN' })
  }

  static jwtError(res, errorMessage) {
    return res.error(401, { code: 5, message: 'JWT_ERROR' }, errorMessage)
  }

  static userNotFound(res) {
    return res.error(404, { code: 6, message: 'USER_NOT_FOUND' })
  }

  static userAlreadyExists(res) {
    return res.error(409, { code: 7, message: 'ACCOUNT_ALREADY_EXISTS' })
  }

  static userInvalidCredentials(res) {
    return res.error(401, { code: 8, message: 'INVALID_CREDENTIALS' })
  }
}
