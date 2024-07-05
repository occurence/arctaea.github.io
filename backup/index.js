console.log("Hello World")

var myVar = 1; // console.log(myVar = 2);
var thisL = "L";
// console.log(thisL)
var fnum = 150
var snum = 200
function myF(x){
    return "slkfjalsikdjf "+x
}
// console.log(myF("aet"))





var first = 4
var second = 4
function Add(a1,a2){
    return a1+a2
}function Subtract(s1,s2){
    return s1-s2
}function Multiply(m1,m2){
    return m1*m2
}function Divide(d1,d2){
    return d1/d2
}function Exponent(e1,e2){
    return e1**e2
}
console.log("Add: "+first+" + "+second+" = "+Add(first,second))
console.log("Subtract: "+first+" - "+second+" = "+Subtract(first,second))
console.log("Multiply: "+first+" * "+second+" = "+Multiply(first,second))
console.log("Divide: "+first+" / "+second+" = "+Divide(first,second))
console.log("Exponent: "+first+" ** "+second+" = "+Exponent(first,second))



// if(1===1){
//     console.log("True")
// } else{

// }

// for(var i = 5; i >= 1; i = i--){
//     console.log(i)
// }


// for(var odd = 1; odd <= 100; odd++){
//     if(odd%2!=0){
//         console.log(odd)
//     }
//     var result = (odd%2==0)?console.log(odd):console.log()
// }

for(var num = 1; num <= 100; num++){
    console.log(num%2 != 0 ? num : "")
}

var myArray = [12.00, "STRING", 'L']
let i = 0
while (i < myArray.length){
    console.log(myArray[i])
    i++
}