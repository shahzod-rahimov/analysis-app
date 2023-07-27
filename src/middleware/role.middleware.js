import ApiError from '../errors/ApiError.js'

export default (...requiredRoles) => {
  if (!requiredRoles.length) throw new Error('Role does not exists')

  return async (req, res, next) => (requiredRoles.includes(req.user?.role) ? next() : ApiError.forbidden(res))
}
