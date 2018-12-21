'use strict'

const certifier = require('../controllers/certifier')
 
const express = require('express')
const router = express()

    router.get('/certifier/dashboard', certifier.getDashboard)

module.exports = router
