function getSecondLargest(nums) {
  let second_max = 0, max = Math.max(...nums);
 
  
  for(let i = 0; i < nums.length; i++){
      if(second_max < nums[i] && nums[i] != max){
          
          second_max = nums[i];
      }
  }
  return second_max;
  
}


console.log(getSecondLargest([1,6,3,4,5,5,6]));