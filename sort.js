"use strict"

//array sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.sort();
document.getElementById("demo2").innerHTML = fruits;

//reverse sort
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruit;
fruit.sort();
fruit.reverse
document.getElementById("demo4").innerHTML = fruit;

//numeric sort()
const num=[70,50,30,40,10]
document.getElementById("demo5").innerHTML=num;
num.sort();
document.getElementById("demo6").innerHTML=num;

//numeric sort() in descending order
const nums=[10,50,30,40,100]
document.getElementById("demo7").innerHTML=nums;
nums.sort(function(a,b){return b-a});
document.getElementById("demo8").innerHTML=nums;

const date = new Date().getDay();
console.log(date)