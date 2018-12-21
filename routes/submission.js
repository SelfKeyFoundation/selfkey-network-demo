'use strict'

const submission = require('../controllers/submission')
 
const express = require('express')
const router = express()

    router.get('/submissions', submission.getSubmissions)
    router.get('/submission', submission.getSubmission)
    router.post('/submission', submission.postSubmission)
    router.get('/submission/update', submission.updateSubmission)

module.exports = router
