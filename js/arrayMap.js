function modifyArray(nums) {
    let result;
    result = nums.map(function(value, key) {
        if(value % 2 == 0)
            return value * 2;
        else 
            return value * 3;
    });
    
    return result;
}

console.log(modifyArray([1,2,3,4,5,6]))