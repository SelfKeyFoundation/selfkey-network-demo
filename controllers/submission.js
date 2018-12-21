'use strict'

const Submission = require('../db/models/submission')

function getSubmissions(req, res) {
    Submission.find({}).then(submissions => {
        res.render('submissions/index', {
            title: 'Submissions',
            submissions: submissions
        })
    })
}

function getSubmission(req, res) {
    Submission.findOne({_id: req.query.id}).then(submission => {
        res.render('submissions/single', {
            title: 'Submission',
            submission: submission,
            user: req.user
        })
    })
}

function postSubmission(req, res) {
    Submission.create({
        type: req.body.submissiontype,
        status: 'init',
        owner: req.user._id
    }).then(submission => {
        console.log(submission)
        req.flash('success', { msg: 'Submitted DID for Attestation' })
        res.redirect('/submissions')
    })
}

function updateSubmission(req, res) {
    if (req.query.status === 'accept') {
        Submission.update({_id: req.query.id},{
            status: 'accept',
            certifier: req.query.cert
        }).then(submission => {
            console.log(submission)
            req.flash('success', { msg: 'Accepted Verify Request' })
            res.redirect('/submissions')
        })
    } else if (req.query.status === 'reject') {
        Submission.update({_id: req.query.id},{
            status: 'rejected'
        }).then(submission => {
            console.log(submission)
            req.flash('error', { msg: 'Reject Verify Request' })
            res.redirect('/submissions')
        })
    } else if (req.query.status === 'pending') {
        Submission.update({_id: req.query.id},{
            status: 'pending',
            certifier: req.query.cert
        }).then(submission => {
            console.log(submission)
            req.flash('error', { msg: 'Pending Additional Info' })
            res.redirect('/submissions')
        })
    } else {
        Submission.update({_id: req.query.id},{
            data: req.user.attributes,
            status: 'docs'
        }).then(submission => {
            console.log(submission)
            req.flash('success', { msg: 'Submitted Data for Attestation' })
            res.redirect('/submissions')
        })
    }
}

module.exports = {
    getSubmissions,
    getSubmission,
    postSubmission,
    updateSubmission
}
