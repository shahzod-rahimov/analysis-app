import { checkSchema } from 'express-validator'

export const IDValidation = checkSchema({
  id: {
    trim: true,
    isUUID: {
      options: 4,
      errorMessage: 'ID must be a UUID4',
    },
  },
})
