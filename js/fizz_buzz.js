
function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i<=n; i++){
        let foo;
        if(i%3 == 0)
            foo = 2
        if(i%5 == 0)
            foo = 3
        if(i%5 == 0 && i%3 == 0)
           foo = 4
       
     
       switch(foo){
           case 2: console.log("Fizz"); break;
           case 3: console.log("Buzz"); break;
           case 4: console.log("FizzBuzz"); break;
           default: console.log(i); break;
       }
    }
   
}

fizzBuzz(15)