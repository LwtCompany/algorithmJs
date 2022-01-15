var twoSum = function(nums, target) {
    let result = [], end_p = false;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j ++){
            if(nums[i] + nums[j] == target){
                end_p = true;
                result.push(i);
                result.push(j);
                break;
            }
        }
        if(end_p)
        break;
    }
    return result;
};

console.log(twoSum([1,2,3,4,5], 3))