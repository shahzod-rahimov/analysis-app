import { Router } from 'express'
import usersRouter from './users/users.routes.js'
import analysisRouter from './analysis/analysis.routes.js'
import analysisNameRouter from './analysisName/analysisName.routes.js'
import staffRouter from './staff/staff.routes.js'

const router = Router()

router.use('/users', usersRouter)
router.use('/analysis', analysisRouter)
router.use('/analysis-name', analysisNameRouter)
router.use('/staff', staffRouter)

export default router
