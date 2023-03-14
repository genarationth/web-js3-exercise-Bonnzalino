
//>>>>>>>>>>>>>>>>>>>>>part 1<<<<<<<<<<<<<<<<<<<<<<
let rubric = Math.floor(Math.random()*12);  //<<<<<<<<<<<<< create a random point
function yourpoint(rubric) {
        if (rubric >= 5){    //<<<<<<<< if point greater or equal 5 return true
            return true;        
        } else {                       
            return false;
        }
    } 
console.log(yourpoint(rubric), rubric);       

//>>>>>>>>>>>>>>>>>>>>>part 2 & 3<<<<<<<<<<<<<<<<<<<<<<
function grade() {
    if (yourpoint(rubric))  {      //<<<<<<<if yourpoint(rubric) = true 
        if (rubric === 11){        //<<<<<<<  if score = 11 print "Perfect"
            return "Perfect";
        } else if (rubric >=8 ){    //<<<<<<<  if score >= 8 print "Excellent"
            return "Excellent";
        } else {                    //<<<<<<<  if score >= 5 print "you passed"
            return "you passed";
        }
    } else {       //<<<<<<<  if yourpoint(rubric) = false print "you failed"
            return "you failed";
        }
 }

 console.log(rubric, grade());
