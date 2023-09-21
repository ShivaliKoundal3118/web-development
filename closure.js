"use strict"

//closures example

function greet(){
    var a=5;
    function displayName(){
        return a=a+1
    }
    return displayName;
}
let k=greet();
var a=10;
console.log(k());
console.log(k())
console.log(a)

//2nd example
function name(j){
    function inner(y){
    
    }
    return inner;
 
}
let inner5=name(8);
let inner7=name(9);

console.log(inner5)
console.log(inner5())


console.log(inner5(6))
console.log(inner7(8))



//example 3
function demo(l){
    function local(m){
        return l-m;
    }
    return local;
 
}
var local5=demo(8);
var local7=demo(9);

console.log(local5)
console.log(local5())


console.log(local5(6))
console.log(local7(8))