function plusMinus(arr) {
   let plus = 0, minus = 0, zero = 0;

   for(let i = 0; i < arr.length; i ++){
       if(arr[i] > 0){
           plus ++;
       }else if(arr[i] == 0){
           zero ++;
       }else{
           minus ++;
       }
   }

   console.log((plus / arr.length).toFixed(6));
   console.log((minus / arr.length).toFixed(6));
   console.log((zero / arr.length).toFixed(6));;
}

plusMinus([1,4,5,-2,-5,0]);