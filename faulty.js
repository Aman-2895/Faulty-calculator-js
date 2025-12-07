
let random= Math.random()
console.log(random)

let a = prompt("Enter first number:")
let b = prompt("Enter operator:")
let c = prompt("enter second number:")



let obj = {
    "+" : "/",
    "-" : "*",
    "*" : "+",
    "/" : "_",
}

if(random<0.1)
{
   alert(`your result is ${eval(`${a} ${b} ${c}`)}`)
}
else
{
    b=obj[b]
   alert(`your result is ${eval (`${a} ${b} ${c}`)}`)
}
