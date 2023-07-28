import { checkSchema } from 'express-validator'

export const createAnalysisNameValidation = checkSchema({
  name: {
    trim: true,
    notEmpty: {
      errorMessage: 'Name is not be empty',
    },
    isString: {
      errorMessage: 'Name must be a string',
    },
  },
  price: {
    trim: true,
    notEmpty: {
      errorMessage: 'Price is not be empty',
    },
    isNumeric: {
      errorMessage: 'Price must be contains only numbers',
    },
  },
})
