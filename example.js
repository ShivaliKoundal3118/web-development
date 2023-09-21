//string lenght examples

let str="A passage is a single uninterrupted stretch of text in a piece of writing. It can be as short as a sentence or two, or it can be several paragraphs long."
let str1="The topic of a passage is what the author is writing about."
console.log(str.length)
console.log(str1.length)
console.log(typeof str)

//example 2

const o=" a passage is an extract from a text, novel, story or even a paragraph."
console.log(o.length)

//string slice

let y="html,css,javascript"
let r=y.slice(7,16)
console.log(r)

let q="Toxsl,CS soft,Red Sky,Thinkfor Next";
let e ="Chandigarh, Punjab, Himachal Pardesh,Haryana"
let h =q.slice(10,25);
let w =e.slice(13,30);
console.log(h)
console.log(w)

//string padding
//pad start
let v="10"
let j= v.padStart(5,"0");
console.log(j);

//example
//pad end
 let abc="44"
 let p= abc.padEnd(5,"3");
 console.log(p);

 //string character
//charAt
 let m="TOXSL"
 console.log(m.charAt(3))

 //charcodeat

 let  a="hey! i am here"
 console.log(a.charCodeAt(10))

 //string to array

 let i="hello,hey,welcome,thankyou";
 const arr=i.split(",")
 console.log(arr[1])


 //example of array to string

 let f=["html","css","javascript"]
 const g=f.split[" "," "]
 console.log(g)