
function camelcase(s) {
   
    let result = 1, current_word;
    
    for(let i = 0; i < s.length; i++){
        current_word = s.substr(i,1);
        
        if(current_word == current_word.toUpperCase())
            result ++;
        
        
    }

    return result;
}

console.log(camelcase('saSsllssdFSssaSaffF'));