function getRndCost(min, max) {
    let cost =  Math.floor(Math.random() * (max - min + 1) ) + min;
    return cost;
}

let rndCost= getRndCost(300, 1000);//<<<<<<random cost 300-1000 will fixed it later when I have time.
console.log(rndCost);

function totalcost(rndCost) {
    let intfee = rndCost * 0.01;     //<<<<<<<< intfee 1%
    const fee = 3;                 // fee every transaction 3$
    total = rndCost + fee + intfee;
    return total;
}

let payCost = totalcost(rndCost);
console.log(payCost);

console.log(`Cost in this transaction is ${rndCost}. if she include $3 fee and 0.01 interest fee, she will pay ${totalcost(rndCost)}`);