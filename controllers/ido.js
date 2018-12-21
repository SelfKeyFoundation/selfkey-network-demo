'use strict'

function getDashboard(req, res) {
	res.render('ido/dashboard', {
        title: 'Identity Owner Dashboard',
        user: req.user,
        address: req.user.pubKey,
        attributes: req.user.attributes,
        imagebase: process.env.SK_URL + '/uploads/'
	})
}

module.exports = {
    getDashboard
}
