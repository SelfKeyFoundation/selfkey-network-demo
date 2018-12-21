'use strict'

function getMarketplace(req, res) {
	res.render('marketplace/index', {
		title: 'Marketplace'
	})
}

function getOffer(req, res) {
	res.render('marketplace/offer', {
		title: 'Offer'
	})
}

module.exports = {
    getMarketplace,
    getOffer
}
