'use strict'

function getDashboard(req, res) {
		res.render('arbiter/dashboard', {
			title: 'Arbiter Dashboard'
		})
}

module.exports = {
    getDashboard
}
