// 1.Create a function that takes two numbers as arguments and returns their sum.
function addNumbers(a,b){
    return a+b;
}
const result = addNumbers(10,5);
console.log(result);


function multiplication(a,b){
    return a*b;
}
 const outputt = multiplication(5, 5);
 console.log(outputt);


// 2. Write a function that takes an integer minutes and converts it to seconds.
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5)); 


 function seconds(minutes){
    return minutes*30;
 }
 console.log(seconds(4));


//3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
 function incrementNumber(num) {
   return num + 1;
 }
 console.log(incrementNumber(7));


 function increment(num){
    return num+1;
 }
 console.log(increment(14))


// 4.Create a function that takes the age in years and returns the age in days.
function convertageToyears(age){
    const years=365;
    return age *years;
}
console.log(convertageToyears(21));


// 5.sbi Create a function that takes voltage and current and returns the calculated power.
function calculatePower(voltage, current) {
  return voltage * current;
}
console.log(calculatePower(220, 5)); 


// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.
function string(a){
    return "something"+a;
}
console.log(string(" special"));


// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}
console.log(makesTen(10, 5));
console.log(makesTen(7,2));
console.log(makesTen(5,5));