'use strict'
 
const express = require('express')
const router = express()
const passport = require('../config/passport')
const user = require('../controllers/user')

	router.get('/logout', user.getLogout)

	router.get('/account', passport.isAuthenticated, user.getAccount)
	router.post('/account/profile', passport.isAuthenticated, user.postUpdateProfile)
	router.post('/account/delete', passport.isAuthenticated, user.postDeleteAccount)

	router.get('/wallets', passport.isAuthenticated, user.getWallets)

module.exports = router
