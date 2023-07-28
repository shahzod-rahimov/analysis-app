import { Router } from 'express'
import * as Users from './users.js'
import { IDValidation } from '../../validations/index.js'
import { handleValidationErrors } from '../../middleware/handleValidationErrors.js'
import { createUserValidation } from '../../validations/users.js'

const router = Router()

router.get('/get/all', Users.getAll)
router.get('/get/byID/:id', IDValidation, handleValidationErrors, Users.getByID)
router.post('/create', createUserValidation, handleValidationErrors, Users.create)

export default router
