function getDayName(dateString) {
    let dayName;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // Write your code here
    const d = new Date(dateString);
    dayName = weekday[d.getDay()];
    return dayName;
}

console.log(getDayName("10/11/2009"))