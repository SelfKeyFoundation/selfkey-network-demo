'use strict'

function getTerms(req, res) {
	res.render('pages/terms', {
		title: 'SelfKey Trust Framework'
	})
}

function getPrivacy(req, res) {
	res.render('pages/privacy', {
		title: 'SelfKey Privacy Policy'
	})
}

module.exports = {
    getTerms,
    getPrivacy
}
