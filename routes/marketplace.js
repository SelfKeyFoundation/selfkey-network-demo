'use strict'

const marketplace = require('../controllers/marketplace')
 
const express = require('express')
const router = express()

router.get('/marketplace', marketplace.getMarketplace)
router.get('/marketplace/offer', marketplace.getOffer)

module.exports = router
