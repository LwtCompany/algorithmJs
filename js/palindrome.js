function highestValuePalindrome(s, n, k) {
    let result = -1;
    let my_array = toArray(s);

    if(n % 2 == 0){

    }else{
        let middle_value = n/2+1;
        let change_count = 0, my_error = false;


        if(k % 2 == 1){
            let my_end = n-1, my_start = 0;

            for(i = 0; i < k/2; i++){
                if(my_array[my_start] != 9 && my_array[my_end]  != 9){
                    my_array[my_start] = '9';
                    my_array[my_end] = '9';

                    console.log(my_array, '\n');
                    console.log(my_end, '\n');
                    console.log(my_start, '\n');
                    my_end--;
                    my_start++;

                    change_count +=2;
                }
            }
            // if(change_count + 1 == k &&  my_array[middle_value] != 9){
            //     my_array[middle_value] = '9';
                result = my_array;
            // }
        }
       
    }

    return result; 
}

function toArray(s) {
   
    let array = [];
    
    for(let i = 0; i < s.length; i++){
        array.push(s.substr(i,1));
    }
    return array;
}

console.log(highestValuePalindrome("19825",5,3));

