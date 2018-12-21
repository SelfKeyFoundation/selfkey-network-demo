'use strict'

const affiliate = require('../controllers/affiliate')
 
const express = require('express')
const router = express()

    router.get('/affiliate/dashboard', affiliate.getDashboard)

module.exports = router
