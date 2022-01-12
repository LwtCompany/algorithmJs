var myAtoi = function(str) {
    let max = Math.pow(2,31)-1
    let min = Math.pow(-2,31);
    let sign = 1;
    let result = '';
    let i=0;
    let trimmed = str.trim();
    if(trimmed[i] === '-'){
        sign = -1;
        i++;
    }
    else if(trimmed[i] === '+'){
        i++;
    }
    
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    while(digits.includes(trimmed[i])){
        result += trimmed[i];
        i++;
    }
    
    result = Number(result) * sign;
    if(result > max) {
        result = max;
    }
    else if(result < min){
        result = min;
    }
    return result;
}; 