import { Router } from 'express'
import * as AnalysisName from './analysisNameController.js'
// import { IDValidation } from '../../validations/index.js'
import { handleValidationErrors } from '../../middleware/handleValidationErrors.js'
import { createAnalysisNameValidation } from '../../validations/analysisName.js'

const router = Router()

router.get('/get/all', AnalysisName.getAll)
// router.get('/get/byID/:id', IDValidation, handleValidationErrors, Analysis.getByID)
router.post('/create', createAnalysisNameValidation, handleValidationErrors, AnalysisName.create)

export default router
