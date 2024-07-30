//Object Oriented Programming in java

//Allows to create objects without defining the class

//One of the ways is creating javascript JSON---> JAvaScript Object notation

//Another way is
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

let mango=new Fruit("sweet","yellow");
let orange=new Fruit("Sour","Orange");
console.log(mango);
console.log(orange);
//another way
var apple={
    taste:"sweet",
    color:"red",
}
console.log(apple);
//ANother way---> using class keyword
//class declaration---> not hoisted---> no hoisting concept here
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.tatse=taste;
    }
};

let kiwi=new FruitClass("sour","green");
console.log(kiwi);
//Using class expression--->not hoisted
let FruitClass2=class{
    constructor(taste,color){
        this.color=color;
        this.tatse=taste;
    }
}

let kiwi2= new FruitClass2("sour","green");
console.log(kiwi2);