function miniMaxSum(arr) {
    let my_max = Math.max(...arr)
    let my_min = Math.min(...arr)

    let summ = arr.reduce((a,b) => a+b, 0);
    console.log(summ - my_max, summ - my_min);

}

miniMaxSum([1,2,4,5,6])