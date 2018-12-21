'use strict'

const rp = require('../controllers/rp')
 
const express = require('express')
const router = express()

    router.get('/rp/dashboard', rp.getDashboard)

module.exports = router
