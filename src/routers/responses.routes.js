/* eslint-disable no-param-reassign */
import express from 'express'
import Response from '../services/Response.js'

const router = express.Router()

export default router.use((req, res, next) => {
  res.ok = (status, data) => {
    const successResponse = new Response(data, null)
    successResponse.getSuccess((successResp) => {
      res.status(status)
      res.json(successResp)
      res.end()
    })
  }

  res.error = (status, err, data = {}) => {
    if (typeof err === 'object') {
      const response = new Response(data, err)
      response.getError((errorResp) => {
        res.status(status)
        res.json(errorResp)
        res.end()
      })
    }
  }
  next()
})
