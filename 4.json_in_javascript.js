//objects in javascript

var bird={x:100,y:20,color:"blue",eggs:["one","two","three"],
fly:function(){
    console.log("Bird is flying",this.x,this.y);
}
};
console.log(bird);
bird.fly();
console.log(bird.x);

console.log(bird.eggs);

//for Loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

//for each
bird.eggs.forEach(function(index,value){
    console.log(index,value);
})