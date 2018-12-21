'use strict'

const pages = require('../controllers/pages')
 
const express = require('express')
const router = express()

    router.get('/terms', pages.getTerms)
    router.get('/privacy', pages.getPrivacy)

module.exports = router
