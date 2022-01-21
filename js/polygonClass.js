class Polygon{
    constructor(array){
      this.array = array;
    }

    get perimeter(){
       let result = 0;
       result = this.array.reduce(function (sum, value, key) {
            return sum + value;
       }, 0)

       return  result;
    }
}

let clasx = new Polygon([1,3,4,6])

clasx.perimeter