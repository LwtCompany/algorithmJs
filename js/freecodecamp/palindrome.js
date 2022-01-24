function palindrome(str) {

    let is_palindrome = true;
    let regex = /[A-Za-z0-9]/g;
    let result = str.match(regex)
  
    for(let i = 0; i < result.length; i ++){
   
        if(!is_palindrome)
            break;
        else if(i >= result.length /2)
            break;
        else
            if(!(result[i].toLowerCase() == result[result.length -(1+i)].toLowerCase()))
                is_palindrome = false;
    }

    return is_palindrome;
  }
  
  console.log(palindrome("@!#ey%e_#"));