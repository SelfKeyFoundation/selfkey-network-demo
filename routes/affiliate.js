'use strict'

const affiliate = require('../controllers/affiliate')
 
const express = require('express')
const router = express()

    router.get('/affiliate/dashboard', affiliate.getDashboard)

    router.get('/affiliate/onboard', affiliate.getOnboard)

    router.get('/affiliate/links', affiliate.getLinks)

    router.get('/affiliate/account', affiliate.getAccount)

    router.get('/affiliate/sales', affiliate.getSales)

module.exports = router
