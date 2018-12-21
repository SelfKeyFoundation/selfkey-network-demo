'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submissionSchema = new mongoose.Schema({

	type: String,
    status: String,
    data: Array,
    owner: String,
    certifier: String,
    chat: Array

}, { timestamps: true })

const submission = mongoose.model('submission', submissionSchema)

module.exports = submission
