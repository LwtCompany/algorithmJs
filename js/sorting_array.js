function insertionSort1(n, arr) {
    let  a = arr[n - 1];

    for(let i = n -2; i >=0; i--){
        if(arr[i] < a){
            arr[i+1] = a;
            console.log(arr.join(" "));
            break;
        }else{
            arr[i+1] = arr[i];
            console.log(arr.join(" "));
            if(i == 0){
                arr[i] = a;
                console.log(arr.join(" "));
            }
        }
     
    }
   
    
}

insertionSort1(3, [5,3,1])