import { checkSchema } from 'express-validator'

export const createStaffValidation = checkSchema({
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
  password: {
    trim: true,
    notEmpty: {
      errorMessage: 'Password is not be empty',
    },
    isString: {
      errorMessage: 'Password must be a string',
    },
  },
  role: {
    trim: true,
    notEmpty: {
      errorMessage: 'Role is not be empty',
    },
    isString: {
      errorMessage: 'Role must be a string',
    },
    isIn: {
      options: [['ADMIN', 'STAFF']],
    },
  },
  floor: {
    optional: true,
    trim: true,
    isNumeric: {
      errorMessage: 'Floor must be contains only numbers',
    },
  },
  room: {
    optional: true,
    trim: true,
    isNumeric: {
      errorMessage: 'Room must be contains only numbers',
    },
  },
})
