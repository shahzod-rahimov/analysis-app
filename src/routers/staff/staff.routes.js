import { Router } from 'express'
import * as Staff from './staffController.js'
// import { IDValidation } from '../../validations/index.js'
import { handleValidationErrors } from '../../middleware/handleValidationErrors.js'
import { createStaffValidation } from '../../validations/staff.js'

const router = Router()

router.get('/get/all', Staff.getAll)
// router.get('/get/byID/:id', IDValidation, handleValidationErrors, Staff.getByID)
router.post('/create', createStaffValidation, handleValidationErrors, Staff.create)

export default router
