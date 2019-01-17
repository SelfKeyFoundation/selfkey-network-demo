'use strict'

const passport = require('passport')
const User = require('../db/models/sk_user')
const Doc = require('../db/models/sk_doc')

function getLogout(req, res) {
	req.logout()
	res.redirect('/')
}

async function getAccount(req, res) {
	let images = await Doc.find({sk_did: req.user.selfkey_wallet})
	res.render('account/profile', {
		title: 'Account Management',
		user: req.user,
		address: req.user.selfkey_wallet,
		attributes: req.user.attributes,
		images: images
	})
}

async function getWallets(req, res) {
	res.render('account/wallets', {
		user: req.user,
		address: req.user.selfkey_wallet,
		attributes: req.user.attributes,
		imagebase: process.env.SK_URL + '/uploads/' + req.user.selfkey_wallet + '/'
	})
}

function postUpdateProfile(req, res) {
	console.log(req.body)
	User.update({_id: req.user.id}, {
		'profile.email': req.body.email,
		'profile.first_name': req.body.first_name,
		'profile.middle_name': req.body.middle_name,
		'profile.last_name': req.body.last_name,
		'profile.phone': req.body.phone,
		'profile.address': req.body.address,
		'profile.region': req.body.region
	}).then(user => {
		req.flash('success', { msg: 'Profile information has been updated.' })
		res.redirect('/account')
	})
}

function postDeleteAccount(req, res, next) {
	User.remove({ _id: req.user.id }, err => {
		if (err) { return next(err) }
		req.logout();
		req.flash('info', { msg: 'Your account has been deleted.' })
		res.redirect('/')
	})
}

module.exports = {
	getLogout,
	getAccount,
	getWallets,
	postUpdateProfile,
	postDeleteAccount
}
