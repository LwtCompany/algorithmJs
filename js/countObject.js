function getCount(objects) {
    let result = 0;
    Object.entries(objects).forEach((element, key, value) => {
        if(objects[key].x == objects[key].y)
        result ++;
    });

    return result;
}

let myObj = [
    {
        x: 1,
        y: 2
    },
    {
        x:2,
        y: 3
    },
    {
        x :1,
        y:1
    },
    {
        x: 2,
        y:2
    },
    {
        x:5,
        y:7
    }
]
console.log(getCount(myObj))