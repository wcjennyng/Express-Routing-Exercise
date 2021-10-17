const express = require('express')
const ExpressError = require('./expressError')
const app = express()


const { mean, mode, median, validateQuery } = require('./helpers')

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of numbers with a comma separating each number', 400)
    }
    let string = req.query.nums.split(',')
    let nums = validateQuery(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }


    let response = {
        operation: "mean",
        value: mean(nums)
    }


    return res.send(response)
})

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of numbers with a comma separating each number', 400)
    }
    let string = req.query.nums.split(',')
    let nums = validateQuery(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let response = {
        operation: 'median',
        value: median(nums)
    }

    return res.send(response)
})

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must include a query of numbers with a comma separating each number', 400)
    }

    let string = req.query.nums.split(',')
    let nums = validateQuery(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    
    let response = {
        operation: 'mode',
        value: mode(nums)
    }

    return res.send(response)
})

app.use(function (req,res, next) {
    const err = new ExpressError('Page Not Found', 404)
    return next(err)
})

app.use(function (err, req, res, next) {
    //default status is 500 internal server error
    let status = err.status || 500
    let message = err.message
    //set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    })
})

app.listen(3000, function() {
    console.log(`Server starting on port 3000`)
})


