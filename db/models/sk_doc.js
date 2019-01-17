'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sk_docSchema = new mongoose.Schema({
	sk_did: String,
	id: String,
	content: String,
	size: String,
	mimeType: String,
	link: String

}, { timestamps: true })

const sk_doc = mongoose.model('sk_doc', sk_docSchema)

module.exports = sk_doc
