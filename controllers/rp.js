'use strict'

function getDashboard(req, res) {
		res.render('rp/dashboard', {
			title: 'RP Dashboard'
		})
}

module.exports = {
    getDashboard
}
