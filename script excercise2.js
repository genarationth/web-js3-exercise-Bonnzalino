//Exercise #2
//>>>>>>>>>>>>>>>>>>>part 1<<<<<<<<<<<<<<<<<<

    function welcome(name1, name2, name3) {
        console.log(`Welcome ${name1} ${name2} and ${name3}.`);
    }
    welcome('bank', 'vit' ,'king');   //Welcome bank vit and king.

//>>>>>>>>>>>>>>>>>>>part 2<<<<<<<<<<<<<<<<<<<<<<<<<

    const currentYear = 2023;
    function yourAge(yourBirthYear) {
        let Age = currentYear - yourBirthYear;
        console.log(`Your birth year is ${yourBirthYear} and Now you are ${Age} years old`);
    }
    yourAge(1994);  //Your birth year is 1994 and Now you are 29 years old
 
//>>>>>>>>>>>>>>>>>>part 3<<<<<<<<<<<<<<<<<<<<<<<<<<<<

   function greeting(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
        let age1 = currentYear - birthYear1;
        let age2 = currentYear - birthYear2;
        let age3 = currentYear - birthYear3;
    console.log (`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
   }

   greeting('Kong', 1994,'Bonn', 1980,'Ron', 1998);
   //Welcome Kong, you are 29. Welcome Bonn, you are 43. Welcome Ron, you are 25.