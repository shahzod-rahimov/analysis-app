import { Router } from 'express'
import * as Analysis from './analysis.js'
import { IDValidation } from '../../validations/index.js'
import { handleValidationErrors } from '../../middleware/handleValidationErrors.js'
import { createAnalysisValidation } from '../../validations/analysis.js'

const router = Router()

router.get('/get/all', Analysis.getAll)
router.get('/get/byID/:id', IDValidation, handleValidationErrors, Analysis.getByID)
router.post('/create', createAnalysisValidation, handleValidationErrors, Analysis.create)

export default router
