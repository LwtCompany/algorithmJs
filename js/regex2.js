let text = "re, Mr.X, red, green, gren, gr, blue, yellow";
let pattern = /\b(Mr.|Mrs.|Ms.|Dr.|Er.)/ig;
let result = text.match(pattern);

console.log(result);