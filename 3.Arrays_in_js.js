let arr=["Apple","Mango","Orange"];
console.log(arr);

console.log(arr[0]);
console.log(arr["length"]);//length---> property of the arrays in js thatt gives the length of an array
console.log(arr.length);

//iteration over all the elements of the array
for(let i=0;i<3;i++){
    console.log(arr[i]);
}

//adding an element
arr.push("Banana");

//deleting the last element
console.log("Popped element is:  "+arr.pop());

//to search
arr.indexOf("Mango");//its like the linear search

//deleting element from front
arr.shift();
console.log(arr);

//insertion at front
arr.unshift("Kiwi");
console.log(arr);

if(arr[0]=="Kiwi"){
    console.log("true");
}
else{
    console.log("false");
}