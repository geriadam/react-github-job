const express = require('express')

const auth = require('../middlewares/auth')
const jobController = require('../controllers/job')
const { check } = require('express-validator')

const router = express.Router()

router.get('/', auth, jobController.findAll)
router.get('/:id', auth, jobController.findOne)

module.exports = router