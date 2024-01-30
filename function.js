function add(a,b){
    return a+b;
}
var a=add(2,3);
console.log(a);
//fuction expression
const multiply = function(a,b){
    return a * b; 
 }
 const product =multiply(4 ,4);
 console.log('Function expression- Product:', product);
 //Arrow function
 const subtract=(a,b)=>a-b;
 //Invocation
 const difference = subtract(8,3);
 console.log('Arrow function- Diffference:',difference);