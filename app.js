/* variable myAge set equal to 27 */
const myAge = 27;
console.log(myAge);
/* variable earlyYears set equal to 2 */
let earlyYears = 2;
/* multiply value stored in earlyYears by 10.5 */
earlyYears *= 10.5;
/* myAge minus 2 and set equal to laterYears */
let laterYears = myAge - 2;
/* multiply laterYears by 4 */
laterYears *= 4;
/* print earlyYears, laterYears to console */
console.log(earlyYears, laterYears);
/* Add earlyYears and laterYears and stored to variable myAgeInDogYears. Result is 109 (21 + 88) */
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

myName = 'Emily';
console.log(myName);
/* .toLowerCase method produces emily. */
console.log(myName.toLowerCase());
/* string interpolation embeds variables */
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} in dog years.`);


