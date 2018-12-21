'use strict'

function getDashboard(req, res) {
		res.render('affiliate/dashboard', {
			title: 'Affiliate Dashboard'
		})
}

module.exports = {
    getDashboard
}
