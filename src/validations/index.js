import { checkSchema } from 'express-validator'
import convertToObjectId from '../utility/convertToObjectId.js'

export const IDValidation = checkSchema({
  id: {
    trim: true,
    isMongoId: {
      errorMessage: 'Invalid ID',
    },
    customSanitizer: {
      options: (value) => convertToObjectId(value),
    },
  },
})
