'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cert_userSchema = new mongoose.Schema({
	address: String,
	token: String,
	type: String,
	status: String,
	profile: {
		first_name: String,
		middle_name: String,
		last_name: String,
		email: String,
		phone: String,
		address: String,
		region: String,
		individual: Boolean,
		corporate: Boolean,
		industries: Array,
		documents: Array,
		deposit: String
	},
	slots: {
		certifiers: {
			slots: String,
			deposit: String
		},
		credentials: {
			slots: String,
			deposit: String
		},
		disputes: {
			slots: String,
			deposit: String
		}
	},
	attributes: Array,
	downline: Array
}, { timestamps: true })

const cert_user = mongoose.model('cert_user', cert_userSchema)

module.exports = cert_user
