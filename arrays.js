/*Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/
console.log("Sum of Resistors in Series");
function sumResitance(array){let sumaResis = 0;
    for (let count = 0; count<=array.length-1; count++){
         sumaResis += Math.abs(array[count])} 
    console.log("la suma es: " + sumaResis);}
 sumResitance([-1,5,6,3]);
 sumResitance([14,3.5,6]);
 sumResitance([8,15,100]);
 console.log("");
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
//console.log(numero)
function numDiv(numero){
    let mitad = numero/2;
    mitades = [];
    mitades.push(mitad,mitad);
    console.log(mitades);
}
numDiv(4);
numDiv(10);
console.log("");
/*

Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
*/
console.log("Secret Society");
function secretName(societyNames){
    let secretSociety = ""
    for (let i = 0; i <= societyNames.length-1; i++){
        secretSociety += societyNames[i][0];
    }
    console.log(secretSociety)
}
secretName(["Esperanza", "Franco", "Nia"]);
secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]);
secretName(['Harry', 'Ron', 'Hermione']);
console.log("")
/*
Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/
console.log("Online status")
const users = ['mockIng99', 'J0eyPunch', 'glassedFer','glassDoor'];
function arrayLength(array){return array.length;}
function onlineStatus(array){
    const total = arrayLength(array);
    console.log(`Users: ${array[0]}, ${array[1]} and ${array.length-2} more are online`)
} 
onlineStatus(users);
// console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log("")
/*
Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */
console.log("Array of Multiples");
function arrayMultiplos(number,length){
let array = [];
let nuevoArray = [];   
    for(let i=1; i<=length; i++){
        array.push(i);
        arr = i*number;
        nuevoArray.push(arr)
    }
    console.log(nuevoArray)}
arrayMultiplos(2,10)
arrayMultiplos(17,6)
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
- Split the array into two equal parts*. If unequal, remove the middle element 
to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
console.log("Antipodal Average");
const array = [1,2,3,4,5,22,6];
function splitArray(array){
    const half = array.length/2;
    const arr1 = array.slice(0, half);
    const arr2 = array.slice(half, array.length).reverse();
    let res = [];
    for(let i=0; i<arr1.length; i++){
        res.push((arr1[i] + arr2[i])*.5);
    }
    console.log(res);
}
splitArray(array);
//function splitArray(array){

/*let arrayNumeros = [1, 2, 3, 5, 22, 6];
if(arrayNumeros.length%2===0){
let array1 = arrayNumeros.slice(0,3);
let array2 = arrayNumeros.slice(3,6).reverse();
let arrayFinal = [];

for (let i=0; i < array1.length; i++){
    console.log((array1[i] + array2[i])/2);
    arrayFinal.push((array1[i] + array2[i]));
}
console.log(array1);
console.log(array2);
console.log(arrayFinal);
}
else{
}
*/