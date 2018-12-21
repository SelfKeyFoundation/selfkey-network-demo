'use strict'

const ido = require('../controllers/ido')
 
const express = require('express')
const router = express()

    router.get('/ido/dashboard', ido.getDashboard)

module.exports = router
