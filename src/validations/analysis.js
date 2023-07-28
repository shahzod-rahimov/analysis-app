import { checkSchema } from 'express-validator'

export const createAnalysisValidation = checkSchema({
  analysis_name_id: {
    trim: true,
    notEmpty: {
      errorMessage: 'Analysis name is not be empty',
    },
    isMongoId: {
      errorMessage: 'Invalid analysis name ID',
    },
  },
  user_id: {
    trim: true,
    notEmpty: {
      errorMessage: 'User is not be empty',
    },
    isMongoId: {
      errorMessage: 'Invalid user ID',
    },
  },
  staff_id: {
    trim: true,
    notEmpty: {
      errorMessage: 'Staff is not be empty',
    },
    isMongoId: {
      errorMessage: 'Invalid staff ID',
    },
  },
})
