'use strict'

const User = require('../db/models/sk_user')

function getOnboard(req, res) {
	res.render('onboard/index', {
		title: 'Choose Your User Type'
	})
}

function postOnboard(req, res) {
    if (req.body.usertype === 'ido') {
        User.update({_id: req.user.id},{type: 'ido'}).then(user => {
            console.log(user)
            res.redirect('/ido/dashboard')
        })
    } else if (req.body.usertype === 'certifier') {
       User.update({_id: req.user.id},{type: 'ido'}).then(user => {
            console.log(user)
            res.redirect('/certifier/dashboard')
       })
    } else {
        req.flash('error', { msg: 'Invalid Type' })
        res.redirect('/onboard')
    }
}

module.exports = {
    getOnboard,
    postOnboard
}
