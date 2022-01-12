var findNumbers = function(nums) {
    let t = 0;
    
    for(let i = 0; i < nums.length; i ++){
        let my_str = nums[i].toString();
        if(nums[i] % 2 == 0 && my_str.length % 2 == 0) t++;
    }
    return t;
};