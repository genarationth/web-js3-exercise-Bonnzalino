let cost = Math.floor(Math.random()*1000); //<<<<<<random cost 0-1000 will fixed it later when I have time.

function totalcost(cost) {
    let intfee = cost * 0.01;     //<<<<<<<< intfee 0.01%
    const fee = 3;                 // fee every transaction 3$
    total = cost + fee + intfee;
    return total;
}

console.log(`This transaction is ${cost}. if she include $3 fee and 0.01 interest fee, she will pay ${totalcost(cost)}`);