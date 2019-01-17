'use strict'

function getDashboard(req, res) {
	res.render('affiliate/dashboard', {
		title: 'Affiliate Dashboard'
	})
}

function getOnboard(req, res) {
	res.render('affiliate/onboard', {
		title: 'Affiliate Onboarding'
	})
}

function getSales(req, res) {
	res.render('affiliate/sales', {
		title: 'Affiliate Sales'
	})
}

function getAccount(req, res) {
	res.render('affiliate/account', {
		title: 'Affiliate Account'
	})
}

function getLinks(req, res) {
	res.render('affiliate/links', {
		title: 'Affiliate Links'
	})
}

module.exports = {
    getDashboard,
    getOnboard,
    getSales,
    getAccount,
    getLinks
}
