/* Demo JavaScript file for exercising different features*/

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
 /* function getName(){
   console.log(x);
 }
 var x = 7;

 getName(); */

 /* function printChessBoard(n){
   let colorStr="";
     for (let j = 1; j <= n; j++) {
       if (j % 2 == 0) {
        colorStr += "W";
       } else {
        colorStr +="B";
       }
   }
   console.log(colorStr);
   for (let i = 1; i< n; i++) {
    colorStr = colorStr.slice(1) + colorStr.slice(0, 1);
    console.log(colorStr);
   }
 }

 printChessBoard(10);  */

 //const ticketsArr = [4,13,2,3, 5];

 //Hackerrank prob: finding the maximum and minimun sum of 4 numbers of an array of 5 integer
/* let arr1 = [1,2,3,4,5];
function miniMaxSum(arr) {
  let maxResult=0, minResult=0;
  let sortedArray = arr.sort((a,b)=>a-b);
  let sortedArrayLen = sortedArray.length;
  for(let i=0; i<=3; i++){
      minResult = minResult + sortedArray[i];
  }
  for(let j =(sortedArrayLen-1); j>=1; j--){
      maxResult= maxResult + sortedArray[j];
  }
  
  console.log(minResult, maxResult);
}
miniMaxSum(arr1); */

//Hackerrank prob: Coverting a time from 12h to 24h format
/* let timeString = '12:01:50AM';
function timeConversion(s) {
  let [hours, mins, secondsModifier] = s.split(':');
  let modifier = secondsModifier.substr(2,2);
  let seconds = secondsModifier.substr(0,2);
  if (hours ==='12' & modifier === 'AM'){
    hours = '00';
  } else if(hours !=='12' & modifier === 'PM'){
    hours = parseInt(hours) +12;
  }
  console.log(hours+':'+mins+":"+seconds); 
}

timeConversion(timeString); */

//Hackerrank prob: Number of unique elemnts in an array
/* function lonelyinteger(a) {
  let uniqueArray = [];
  let arrayLength = a.length;
  for (let i = 0; i < arrayLength; i++) {
    if (!uniqueArray.includes(a[i])) {
      uniqueArray.push(a[i]);
    }
  }
  console.log(uniqueArray.length);
  return uniqueArray.length;
}
const sampleArray = [1,3,4,3,2,1];
lonelyinteger(sampleArray); */

//Hackerrank prob: Find the unique elemnt in an array
/* function lonelyinteger(a) {
  let uniqueArray = [];
  let arrayLength = a.length;
  a.filter()
  for (let i = 0; i < arrayLength; i++) {
    a.array.forEach(element => {
      
    });
  }
  console.log(uniqueArray.length);
  return uniqueArray.length;
}
const sampleArray = [1,3,2,4,3,2,1];
lonelyinteger(sampleArray); */