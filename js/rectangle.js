function Rectangle(a, b) {

    let length = a, width = b, perimeter, area;

    perimeter = 2 * (a+b);
    area = a * b;

   return{
       length,
       width,
       perimeter,
       area
   }
    
}

console.log(Rectangle(4,5));