function getLetter(s) {
    let letter;
    let foo = s.slice(0,1);
    let A = "aeiou",
    B = "bcdfg",
    C = "hjklm";
    if(A.match(foo))
        letter = "A";
        
    else if(B.match(foo))
        letter = "B";
    else if(C.match(foo))
        letter = "C"
    else 
        letter = "D";
        
    return letter;
}

console.log(getLetter('fsla'))