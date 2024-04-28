//print odd number (using anonymous function)
let arr=[0,1,2,3,4,5,6,7,8,9];
let odd=function(){
    let odd=arr.filter(num=>num%2==1)
    console.log(odd)
}
odd()
//odd number(using IIFE function)
(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
})(1,2,3,4)
//convert all the string to title caps in a string array(anonymous function)
let str=function(){
    let arr="HELLO WORLD"
    let titlecase=arr.toLowerCase().replace(/\b(\w)/g,s=>
    s.toUpperCase());
    console.log(titlecase)

}
str()
//convert all the string to title caps in a string array(IIFE function)
(function(str){
    str=str.toLowerCase().split('');
    for(var i=0;i<str.length;i++){
        str[i]=str[i].chatAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(''));
})("HELLO WORLD")

//sum of all numbers in array(anonymous function)
let func=function(){
    let ar=[1,2,3,4,5]
    let sum=ar.reduce(function(a,b){
        return a+b;
    });
    console.log(sum);
}
func()

//sum of all numbers in array(IIFE function)
(function(){
    let sum=[1,2,3,4,].reduce(add,5);
    function add(accumulator,a){
        return accumulator+a;
    }
    console.log(sum);
})()

//return all prime number in an array(anonymous function)
let prime=function(arr){
    return arr.filter(function(n){
        for(let i=2;i<n;i++){
            if(n%i===0)return false;
        }
        return n>1;
    });
};
console.log(prime([7,16,9,3]));

//return all prime number in an array(IIFE function)
(function(){
    var primeNum=[7,16,9,3]
    primeNum=primeNum.filter(function(number){
        for(var i=2;i<=Math.sqrt(number);i++){
            if(number%i===0)return false;
        }
            return true;
        });
        console.log(primeNum);
    
})()

// Return all palindromes in an array(anonymous function)
let isPalindrome = function (){
var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
 var arr = myArray.filter(function (c, d) {
    var palindrome = c.split(").reverse().join(");
     if (c== palindrome) {
         console.log(myArray[d]); 
        }
     });
     } 
     isPalindrome()

//Return all palindromes in an array (IIFE Function)
(function () { 
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
         var palindrome = c.split(").reverse().join("); 
         if (c== palindrome) { 
            console.log(myArray[d]); 
        } 
    }); 
})()

// Returns median of two sorted arrays of the same size
//(Anonymous Function)
let median = function(a, b) {
     let c = [...a, ...b].sort((a, b) => a - b);
const half = c.length/2|0;
 if (c.length % 2) { 
    return c[half];
} else {
    return (c[half] + c[half - 1]) / 2;
    }
    }
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    console.log(median(arr1, arr2));

   //Returns median of two sorted arrays of the same size (IIFE Function)
    (function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    const half = c.length / 2 | 0;
    if (c.length % 2) {
         console.log(c[half]);
         } else {
    console.log((c[half] + c[half - 1]) / 2); 
}
    })()
   
    // Remove duplicate from an array.
    //(Anonymous Function)
    let findDuplicates = function () {
    const yourArray = [1, 2, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if( tempArray[i+1] === tempArray[i]){
            duplicates.push(tempArray[i])
        }
    
    }
    console.log(duplicates)
    }
    findDuplicates()

//Remove duplicate from an array.(IIFE function)
 (function(){
let numbers=[1,2,3,2,4,5,5,6];
let duplicates=numbers.filter((item,index)=>index!==
numbers.indexOf(item));
console.log(duplicates);
 })()

//Rotate an array by k times(anonymous function)
let rotateArray =function(A, K) {
if (A.length === K || K === 0) {
return A;
}
K = K % A.length;
for (let i = 0; i < K; i++) { 
    A.unshift(A.pop());
}
console.log(A)
}
rotateArray ([1,2,3,4,5],2)

//Rotate an array by k times(IIFE Function)
(function(A, K) { 
if (A.length === K || K === 0) {
     return A;
}
K = K % A.length;
for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
}
console.log(A)
})([1,2,3,4,5],2)


//using arrow funtion (oddnumbers)
var numbers = [1,2,3,4,5,6,7,8,9,];
var oddNumbers=number.filter(num=> num%2!==0);
console.log(oddNumbers);

//using arrow function(the string to title caps in a string array)

let stringArray =["hai","this is","prasanth","from","chennai"];
let titleCapsArray=stringArray.map(str =>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
console.log(titleCapsArray);

//using arrow function (sum of all numbers in array)

const numbers = [12,13,14,15,16];
const sum = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
console.log(sum);

//using arrow function (the prime numbers in an array)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);

//using arrow function( the palindromes in an array)

const words = ["level", "hello", "radar", "world", "madam"];
const Palindrome = word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};

const palindromes = words.filter(word => Palindrome(word));

console.log(palindromes);