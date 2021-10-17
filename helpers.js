function mode(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 0;
        }
        map[nums[i]] += 1;
    }
    let max = 0;
    let mode;
    for (val in map) {
        if (map[val] > max) {
            max = map[val];
            mode = val;
        }
    }
    return Number(mode);
}

function mean(nums) {
    let total = 0
    for (i=0; i < nums.length; i ++) {
        total += nums[i]
    }
    return (total/nums.length)
    
}

function median(nums) {
    let result = 0
    nums.sort()
    if ( nums.length % 2 === 0 ) {
        result = (nums[nums.length / 2 -1] + nums[nums.length /2]) /2 
    } else {
        result = nums[(nums.length-1)/2]
    }
    return result
}



function validateQuery(arr) {
    let finalArr = []

    for (let i=0; i < arr.length; i++) {
        let el = Number(arr[i])
        
        if(Number.isNaN(el)) {
            return new Error(`${arr[i]} is not a number`)
        }

        finalArr.push(el)
    }

    return finalArr    

}



module.exports = {
    mode,
    mean,
    median, 
    validateQuery
}

