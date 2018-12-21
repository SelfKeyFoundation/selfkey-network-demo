'use strict'

const onboard = require('../controllers/onboard')
 
const express = require('express')
const router = express()

    router.get('/onboard', onboard.getOnboard)
    router.post('/onboard', onboard.postOnboard)

module.exports = router
