const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

router.get('/', userController.findAll)
router.get('/:username', userController.findOne)
router.post('/', userController.create)

module.exports = router