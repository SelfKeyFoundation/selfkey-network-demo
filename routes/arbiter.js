'use strict'

const arbiter = require('../controllers/arbiter')
 
const express = require('express')
const router = express()

    router.get('/arbiter/dashboard', arbiter.getDashboard)

module.exports = router
