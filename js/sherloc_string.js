function isValid(s) {
    let result, my_array, changed = 0, one_differ;
    s = s.split("")
    const map = s.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    my_array = [...map.values()];

    my_array.forEach((value, index, array) => {
        if(!(array[0] == value)){
            changed ++;
            one_differ = index;
        }
    });

    if(changed === my_array.length-1 && (my_array[0]+1 === my_array[1] || my_array[0]-1 === my_array[1])){
        result = "YES"
       
    }
    else if(changed === 1 && (my_array[0]-1 === my_array[one_differ] || my_array[0]+1 === my_array[one_differ])){
        result = "YES"
    }else{
        result = "NO";
    }
    return result;
}

console.log(isValid('abcdefghhgfedecba'));