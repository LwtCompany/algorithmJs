class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function(){
    let result = 0;
    if(this.h == undefined)
        result = Math.pow(this.w,2)
    else
     result = this.h * this.w;

    return result;
}


class Square extends Rectangle{
    constructor(w){
       super(w);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}