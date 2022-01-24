function rot13(str) {
    let result = "";

    for(let i = 0; i < str.length; i++){  
        switch(str[i]){
            case "A":
            case "N":
                if("A" == str[i]) 
                    result +="N";
                else
                    result +="A"
                break;
            case "B": 
            case "O":
                if("B" == str[i])
                    result +="O";
                else
                    result +="B";
                break;
            case "C":
            case "P":
                if("C" == str[i])
                    result +="P";
                else 
                    result +="C";
                break;
            case "D": 
            case "Q":
                if("D" == str[i])
                    result +="Q";
                else
                    result +="D";
                break;
            case "E": 
            case "R":
                if("E" == str[i])
                    result +="R";
                else
                    result +="E";
                break;
            case "F": 
            case "S":
                if("F" == str[i])
                    result +="S";
                else
                    result +="F";
                break;
            case "G": 
            case "T":
                if("G" == str[i])
                    result +="T";
                else
                    result +="G";
                break;
            case "H": 
            case "U":
                if("H" == str[i])
                    result +="U";
                else
                    result +="H";
                break;
            case "I": 
            case "V":
                if("I" == str[i])
                    result +="V";
                else
                    result +="I";
                break;
            case "J": 
            case "W":
                if("J" == str[i])
                    result +="W";
                else
                    result +="J";
                break;
            case "K": 
            case "X":
                if("K" == str[i])
                    result +="X";
                else
                    result +="K";
                break;
            case "L": 
            case "Y":
                if("L" == str[i])
                    result +="Y";
                else
                    result +="L";
                break;
            case "M": 
            case "Z":
                if("M" == str[i])
                    result +="Z";
                else
                    result +="M";
                break;
            default: 
                result +=str[i];
                break;
        }
    }


    return result;
}
  
 console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));