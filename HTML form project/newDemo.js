// call(), apply)(), bind()

/* let  sayHello = ()=>{
   console.log("Hello " + this.name + this.abc());
  }
          
  let obj = {
      name: "Sandy",
    abc(){
        return "This is the abc method of obj object";
        }};
          
  sayHello.call(obj); */ 


 /*  function stringConcat(separator, ...args){
        return args.join(separator);
  }
  console.log(stringConcat("+", "I", "am", "Jakir", "Molla")); */

  /* let arr = [1,2,3,4,5,6,7,8,9,0];

[firstEl, secondEl, ...restOfTheEl] = arr;

  console.log(firstEl);
  console.log(secondEl);
  console.log(restOfTheEl); */

/* function calculateMatchStick(numberOfH){
    let result = (numberOfH*2) + ((numberOfH*4)-(numberOfH-1));
    return result;
}

console.log(calculateMatchStick(1));
console.log(calculateMatchStick(4));
console.log(calculateMatchStick(87)); */

/* const arr1 = [1,2,3,4];
arr1 [1,2,3] = [1,2,3,4,10];
//[1,2,3, [1,2,3,4,10]]
console.log(arr1);
console.log(arr1.push(10));
console.log("new arrar is:", arr1); */

/* function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(hoistStr); // Output: undefined

var hoistStr = 'The variable has been hoisted.'; */

/* let a =5, b=4;
[a, b] = [b, a]

console.log(a)
console.log(b) 

let x, y;
x = x+y;
y= x-y;
x= x-y;
*/

//Hoisting
 

 function getName(){
   console.log(x);
 }
 var x = 7;

 getName();