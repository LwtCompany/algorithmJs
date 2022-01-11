function reverseNum(x) {
  
    let min =  (-1) * Math.pow(2,-31);
    let max =  Math.pow(2,31);
    let result = 0, reversed;

    reversed = parseFloat(
        x
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(x);


    if(reversed > 0){
        if(max -1 > reversed)
        result = reversed
    }else{
       if( (reversed < min) && (reversed*(-1) < max))
       result = reversed;
    }
   
      return result
}

console.log(reverseNum(123));



