function birthdayCakeCandles(candles) {
    let max_value = Math.max(...candles), t = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] == max_value)
            t++;
    }
    return t;
}

console.log(birthdayCakeCandles([1,2,3,4,5,6,6, 7]))