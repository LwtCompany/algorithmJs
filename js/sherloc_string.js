function isValid(s) {
    let result = "NO", my_array = [], changed = 0;
    s = s.split("")
    const map = s.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    
    my_array = [...map.values()];
    let my_min = Math.m
 
    
    if(changed <= 1)
     result = "YES";
  
    return result;
}

console.log(isValid('aabcds'));