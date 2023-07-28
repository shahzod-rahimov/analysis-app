import { checkSchema } from 'express-validator'

export const createUserValidation = checkSchema({
  full_name: {
    trim: true,
    notEmpty: {
      errorMessage: 'Full name is not be empty',
    },
    isString: {
      errorMessage: 'Full name must be a string',
    },
  },
  phone: {
    trim: true,
    notEmpty: {
      errorMessage: 'Phone number is not be empty',
    },
    isString: {
      errorMessage: 'Phone number must be a string',
    },
    matches: {
      options: /([378]{2}|(9[013-57-9]))\d{7}$/,
      errorMessage: 'Invalid phone number. Example phone number: 991234567',
    },
  },
  birthday: {
    trim: true,
    notEmpty: {
      errorMessage: 'Birthday is not be empty',
    },
    isDate: {
      errorMessage: 'Birthday must be in date format',
    },
  },
})
