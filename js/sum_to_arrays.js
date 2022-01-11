var addTwoNumbers = function(l1, l2) {
    let result = 0, max, min;
    let min_number = 0, max_number = 0;
    let t1 = 1, t2=1;
    let lastDigit;
    let myFunc = num => Number(num);
  

    Math.max(l1.length, l2.length) == l1.length ? max = l1 : max = l2;
    Math.min(l1.length, l2.length) == l1.length ? min = l1 : min = l2;

    for(let i = 0; i < max.length; i ++){
        let current_value = max[i]*t1;
        max_number += current_value;
        t1 *=10;
    }


    for(let j = 0; j < min.length; j++){
        let current_value = max[j]*t2;
        min_number += current_value;
        t2 *=10;
    }
 
    let num =  max_number + min_number;
   
    function reverseNum(num) {
        return (
        parseFloat(
          num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
      )
    }
    lastDigit = reverseNum(num)
    result = Array.from(String(lastDigit), myFunc);

    return result;
  
};

 console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));











