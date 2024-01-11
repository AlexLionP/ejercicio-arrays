/*Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/
console.log("Sum of Resistors in Series");
let a = 5;
let b = -4;
let c = 8;
let d = -7;
let e = 2;
let resistance = [a, b, c, d, e];
console.log(resistance);
let sumaResis = 0;
for (let count = 0; count<=resistance.length-1; count++){
     sumaResis += Math.abs(resistance[count])
}
 console.log("la suma es: " + sumaResis);
 console.log("")
/*
Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
Note: The original example for `numDiv(10)` appears to be incorrect.
*/
console.log("Number divided into halves");
let numero = 5;
console.log(numero)
let mitad = numero/2;
mitades = [];
mitades.push(mitad,mitad);
console.log(mitades);
console.log("")
//function reySalomonArray(numero){
//     console.log(mitad);
//     for (let i = 0; i == 1; i++){
//         mitades = mitades.push(i);
//     }console.log(mitades);
//} 
//reySalomonArray(8)
/*

Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
*/
console.log("Secret Society");
let secretName=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
console.log(secretName);
let secretSociety = ""
for (let i = 0; i <= secretName.length-1; i++){
    secretSociety += secretName[i][0];   
}
console.log(secretSociety)
console.log("")
/*
Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/
console.log("Online status")
// const onlineStatus = (arr) => {
//     numUsuarios = arr.length
//     return arr.length - 2;
// }
// console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log("")
/*
Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */
console.log("Array of Multiples")
function arrayMultiplos(number, length){
    
    for(let i=0; i<=length-1; i++){
        let array = [];
        j = (i+1)*number
        array.push(j);
        console.log(j);
    }
}
//const resultado = arrayMultiplos(2, 10);
//console.log(resultado);
console.log("")
/*

Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/console.log("Positive dominance in Array")
const numberArray = [-1, -3, -5, 4, 6767];
const negativeArray = [-1000, -1, 50, 1, 5, 2]

function positiveArray(array){
    let positiveCount = 0;
    array.forEach((num) => {
        if (num > 0) {
            positiveCount++;
        }
    })
    const mitad = array.length/2;
    return positiveCount > mitad
}
const res = positiveArray(numberArray);
console.log(res);
console.log("");
/*
Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
console.log("Antipodal Average");