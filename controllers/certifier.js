'use strict'

const Submission = require('../db/models/submission')

function getDashboard(req, res) {
	Submission.find({}).then(submissions => {
		res.render('certifier/dashboard', {
			title: 'Certifier Dashboard',
			submissions: submissions
		})
	})
}

module.exports = {
    getDashboard
}
