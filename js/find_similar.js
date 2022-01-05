
function sockMerchant(n, ar) {
    // Write your code here
    let result = 0;
    for(let i = 0; i < n; i ++){
        for(let j = i+1; j < n; j++){
            if(ar[j] == ar[i] && i != j && ar[j] != 0){
                ar[j] = ar[i] =0;
                result++;
                console.log(ar)
                break;
            }
        }
    }
    
    return result;
}

console.log(sockMerchant(7, [1,5,3,5,5,5,5,7]));

