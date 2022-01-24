var denominations = [
    {
        name: 'ONE HUNDRED',
        value: 100
    },
    {
        name: 'TWENTY',
        value: 20
    },
    {
        name: "TEN",
        value: 10
    },
    {
        name: 'FIVE',
        value: 5
    },
    {
        name: 'ONE',
        value: 1
    },
    {
        name: 'QUARTER',
        value: 0.25
    },
    {
        name: 'DIME',
        value: 0.1
    },
    {
        name: 'NICKEL',
        value: 0.05
    },
    {
        name: 'PENNY',
        value: 0.01
    }
];

function checkCashRegister(price, cash, cid) {
    
    let change = cash - price;

    let totalCid = cid.reduce(function(acc, next){
        return acc+next[1]
    }, 0.0);

 
    if(totalCid < change){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }else if(totalCid === change){
        return {status: "CLOSED", change: cid};
    }
    
    cid = cid.reverse();

    let result = denominations.reduce(function(acc, next, index){
       
        if(change >= next.value){
         
            let currentValue = 0.0;
            while(change >=next.value && cid[index][1] >= next.value){
               
                currentValue += next.value;
                change -= next.value;
                change = Math.round(change*100)/100;
                cid[index][1] -=next.value
              
            }
            acc.push([next.name, Math.round(currentValue*100)/100]);
            return acc;
        }else{
            return acc;
        }
        
    }, []);

    return result.length > 0 && change === 0 ? {status: "OPEN", change: result} : {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));