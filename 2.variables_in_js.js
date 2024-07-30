//Functions in javascript

console.log("Hello World");
c=20;//global variable
var d=30;//Function Scope
let e=50;//Block scope

//ways of writing functions---> Declaration, Function Expression

//using function declaration
function fun(){
    let a=5;// let has a block scope
    f=60;
    if(a===5){
        let b=10;
        console.log("Inside",b);
        const m=87;
        console.log("value of const inside the block",m);
    }
   // console.log("value of const outside the block",m);---> throws error, block scoped
   // console.log("Outside",b);---> shows error b is block scoped
   console.log("Outside",a);
}
fun();
console.log("Global",f);

//the first func call will work but the second will not work
square_root(10);
//sqrt_n(25);--> program will terminate

function square_root(n){
    console.log("Inside first sqrt fn");
    console.log(Math.sqrt(n));
    console.log("Completed");
    return "completed";
}

var sqrt_n=function(){
    console.log("Inside second sqrt fn");
    console.log("Completed");
    return "completed";
}

square_root(10);
sqrt_n(25);
//both func calls works