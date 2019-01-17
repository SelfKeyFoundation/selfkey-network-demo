'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sk_userSchema = new mongoose.Schema({
	selfkey_wallet: String,
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
	affilliate: {
		payout_wallet: String
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

const sk_user = mongoose.model('sk_user', sk_userSchema)

module.exports = sk_user
