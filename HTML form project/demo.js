//const { reverse } = require("lodash");


let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', showAlet);

function showAlet(){
    alert("you have clieck the namaste button");
}


/*  for( let i=0; i<10; ){
     console.log(i)
     i++
 } */

let animal={
    name: 'Zebra', leg: 4
}

for( let key in animal){
    //console.log(key, animal[key]);
}

let storeItem ={
    name: "Flowers",
    price: 40,
    dicount: 25,
    itemCode: "F40"
}


//Creating objects using constructor function
function Product(name, price, discount, itemCode){
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.productId = itemCode;
    this.dicountCalculator = function abc(){
            return (price*discount)/100;
    }
}
let productObject = new Product("Flower", 3000, 25, "F40");


let arr = [1,5,6,8,"jakir" ];

/* console.log(arr.push(null));
console.log(arr); */

let obj1 = {
    primarySkill: "JavaScript",
    village: "Naldanga",
    isActive: true,
    age: 26,
    college: "IIT"     
}

let obj2 = {
    primarySkill: "JavaScript",
    village: "Naldanga",
    isActive: true,
    age: 26,
    college: "IIT"
}

/* var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = JSON.stringify(user1) === JSON.stringify(user2); */

//const isEqual = Object.toJSON(obj1) == Object.toJSON(obj2);
const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);


/* let arrNames = ["Aman", "chele", "jakir", "Nizam"];

arrNames.forEach( (element, index) =>
    console.log(element, index)) */


//Array Exercise


let a=15, b= 25;
//[a, b] = [b, a];
//b = [a, a=b][0];
//console.log("the value of a ", a);
//console.log("the value of b ", b);


/* higher order functions
function higherOrder2() {
    return function() {
      return "Do something";
    }
  } 
  var x = higherOrder2();
  x();
  */

/* //this keyword
  (function doSomething() {
    console.log(this);
  })(); */

// call(), apply)(), bind()
/* let  sayHello = ()=>{
   console.log("Hello " + this.name);
  }
          
  let obj = {
      name: "Sandy",
    abc(){
        return "This is the abc method of obj object";
        }};
          
  sayHello.call(obj); */

//Currying
// function add (a) {
    //return function addition/*optional*/(b){
      //return a + b;}
  //}
  //add(3)(4);

/* creating array out of values of an object
let obj = {
    a: 1,
    b: 2,
    c: 3
}

const arr1 = [];
for (let item in obj) {
    arr1.push(obj[item]);
    
} */

//reversing a string
/* let greeetings = "My name is Jakir";
let revStringArr = greeetings.split('').reverse().join('');

console.log(revStringArr); */

/* const obj = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
    }
}
obj.getA().getB(); */

/* let arr2 = [1, 2];

let result = arr2.toString();
console.log("this is my result"+result); */

/* Scope of this keyword

var table = "window table";

const cleanTable = function (){
    console.log("Cleaning "+ this.table);
}

cleanTable(); 

class CreateRoom{
    constructor(name, soap){
        this.table = name+"'s table"
        this.soap = soap;
    }

    cleanTable(){
        console.log("Cleaning "+this.table+" with some " +this.soap);
    }
}

let jacksRoom = new CreateRoom('Jack', "surf excel");

jacksRoom.cleanTable();*/