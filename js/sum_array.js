function simpleArraySum(ar) {
    let result = 0;

    for(let i = 0; i < ar.length; i++){
        result += ar[i];
    }

    return result;

}

console.log(simpleArraySum([1,3,4]))