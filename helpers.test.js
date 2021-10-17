//jest helpers.test.js (to run in terminal)

const { mean, mode, median } = require('./helpers')

describe('mean function', function() {
    test('finds the mean of an array of numbers', function(){
        expect(mean([1,3,5,7])).toEqual(4)
    })
    test('finds the mean of an array of numbers including negative numbers', function() {
        expect(mean([-2, 5, -5, 6])).toEqual(1)
    })
})

describe('mode function', function () {
    test('finds the mode of an array of numbers', function (){
        expect(mode([1,2,4,4,5,6,5,4])).toEqual(4)
    })
    test('finds the mode of an array of numbers including negative numbers', function (){
        expect(mode([1,2,4,-4,-4,5,6,5,-4])).toEqual(-4)
    })
})

describe('median function', function() {
    test('finds the median of an array with an even amount of numbers', function (){
        expect(median([4,5,6,7])).toEqual(5.5)
    })
    test('finds the median of an array with an odd amount of numbers', function (){
        expect(median([4,5,6])).toEqual(5)
    })
})