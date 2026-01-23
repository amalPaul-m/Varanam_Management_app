import express from 'express'
import { functions } from '../controller/functions.js'

const router = express.Router()

router.post('/create-function', functions)

export default router