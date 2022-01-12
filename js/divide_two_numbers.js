var divide = function(dividend, divisor) {
    let max = 2**31 - 1;
    let min = -(2**31);
    const sign = dividend > 0 ^ divisor > 0 ? false : true;
    let result, t = 0;
    
   

    while(dividend >= divisor){
        dividend -=divisor;
        t++
    }
  
    result = Number(t) * sign;
    if(result > max) {
        result = max;
    }
    else if(result < min){
        result = min;
    }
    return result;
}; 


console.log(divide(-123,23))