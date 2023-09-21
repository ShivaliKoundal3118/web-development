"use strict"
//Array length'
//example 1
const car=["BMW","VERNA","SWIFT","THAR"]
let size= car.length;
document.getElementById("demo").innerHTML=size;

//example 2
var a=["java","react","php","javascript","python","webdesign","Graphic design","AI"]
var c= a.length;
document.getElementById("arr").innerHTML=c;

//array toString
//Example 1
b=["Apple","Banana","Kiwi","Orange"]
var a
a=b.toString()
var b
console.log(a)

//Example 2
b=["India","America","China","Canada",".These are some countries"]
var b
var a
a=b.toString(",")
console.log(a)

//Array POP()
//example 1
let j=["PALAMPUR","PUNJAB","MOHALI","DELHI"]
document.getElementById("greet").innerHTML=j;
j.pop();
document.getElementById("get").innerHTML=j;

//example 2

let i=["fruits","grocery","vegetables","toys"]
document.getElementById("head").innerHTML=i;
i.pop();
document.getElementById("que").innerHTML=i;

//Array Push()
//example 1
var c=["Silver","gold","platinum"]
document.getElementById("demo1").innerHTML=c.push("diamond");
document.getElementById("demo2").innerHTML=c;

//example 2
var t=["CEO","PA","MANAGER","HR"]
document.getElementById("demo3").innerHTML=t.push("Employees");
document.getElementById("demo4").innerHTML=t;

//Shift() array
//example 1
var b=["iPhone","Samsung","Realme","Redmi"]
document.getElementById("demo5").innerHTML=b;
b.shift();
document.getElementById("demo6").innerHTML=b;

//example 2
var b=["fanta","coca-cola","thums up","sprite"]
document.getElementById("demo7").innerHTML=b;
b.shift();
document.getElementById("demo8").innerHTML=b;

//Array unshift()
//example 1
var k=["PALAMPUR","PUNJAB","MOHALI","DELHI"]
document.getElementById("demo9").innerHTML=k;
k.unshift("haryana");
document.getElementById("demo10").innerHTML=k;

//example 2
var c=["Silver","gold","platinum"]
document.getElementById("demo11").innerHTML=c;
c.unshift("diamond");
document.getElementById("demo12").innerHTML=c;

//Changing element
//example 1
var f=["Cs soft solution","Red sky pvt ltd","think for next","Solitare Solution"]
document.getElementById("head1").innerHTML=f;
f[1]="TOXSL pvt ltd";
document.getElementById("head2").innerHTML=f;

//example 2
let r=["fanta","coca-cola","thums up","sprite"];
document.getElementById("head3").innerHTML=r;
r[2]="Mountain dew";
document.getElementById("head4").innerHTML=r;


//array concatenation
//example 1
const array1=["apple","banana"]
const array2=["orange","lemon","guava"]

const con=array1.concat(array2);
document.getElementById("head5").innerHTML=con;

//example2

let y=["html","css","javascript","react"]
let x=["nodejs","mongo db"]
let q=["Full Stack Developer"];
let abc= y.concat(x,q);
document.getElementById("head6").innerHTML=abc;
