let fruits=[1,"banana","orange"];
console.log(fruits[0]);
fruits.push("kiwi"); //push method:- Adding elements to the end
console.log(fruits);
fruits.unshift("mango"); //Adding elements to the beginning
console.log(fruits);
//Removing the last element
let removedLast=fruits.pop();
console.log(fruits);
//Removing the first element
let removedFirst=fruits.shift();
console.log(fruits);
//Finding index of an element
let indexOfOrange=fruits.indexOf("orange");
console.log(fruits);
//Iterating using a for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//Slicing an array
let citrus=fruits.slice(1,3);
console.log(fruits[i]);
//Splicing an array(modifying original array)
let removed=fruits.splice(1,2,"pear","melon");
console.log(fruits);
//Concatenating arrays
let moreFruits=["grapefruit","pineapple"];
let allFruits=fruits.concat(moreFruits);
console.log(fruits);




