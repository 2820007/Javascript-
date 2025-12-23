// console.log("Hello javascript" );

// alert("hello")

// document.writeln("hello")

// userName=prompt("Enter your name")
// console.log(userName)
// document.writeln(userName)
// alert(userName)

let name = "ravi";
// console.log(name)

firstName = "ravi";
fullName = `ravi
          mandal`;

// Number data types
a = 9;
f = 3.2222;

//  boolean
isAdmin = true;
isAdmin = false;

// null
var num = null; // only for object

var num; //without object sab ko lagi defined garne

//symbol

var s1 = Symbol("ram");
var s2 = Symbol("ram");
//But (s1 === s2 ) false dinx
// console.log(typeof(s1))

//object

// let user1={
//     name:"ravi",
//     age:23
// }

// let user2={
//     name:"mandal",
//     age:25
// }

// Array
// const arr=[1,3,4,5,6,3,4,"ravi"]
// console.log(arr)

//  console.log(arr[3])

//Function
//regular function
//Anonymous function
//named function
//arrow function

//Regular function

// function add(){
//     console.log("add")
// }

// add()

//Anonymous function

//  function (){

// }

//Named function

// const add= function(){
//     console.log("adding")

// }

//arrow function

// const add=()=>{
//     console.log("add")
// }

//Date
// const date=new Date()
// console.log(date)

// console.log( typeOf(date))

//hoisting
// console.log(a)
// var a=5

//operator in JS

// 1.arithmetic operator
// 2.assignment operator
// 3.logical operator
// 4,comparision operator

// console.log(2 + 3);
// console.log(2 - 8);
// console.log(2 + 3);
// console.log(2 + 3);
// console.log(2 + 3);

// let a = 20;
// console.log(a++); //20
// console.log(a); //21
// console.log(a--); //20
// console.log(a); //19
// console.log(++a); //21
// console.log(--a); //19


//Assignment operator

// x=10
// console.log(x)

// x +=5
// console.log(x)
// x -=5
// console.log(x)
// x *=5
// console.log(x)
// x /=5
// console.log(x)
// x **=5
// console.log(x)


// comparison operator

// let x=5
// let y=4
// console.log(x===y) // Data type check garx

// console.log(x<=y)
// console.log(x!=y)
// console.log(x!==y)



// logical operator

// console.log( x>y && y<x)
// console.log( x<y && y>x)
// console.log( x>y || y<x)

// let isAdmin=true

// console.log(! isAdmin)


//type casting
// console.log(true+1)
// console.log(true="hi"+1+true) //truehi1true

// string to number

  // x="ravi"
  // x=Number(x)
  // x=parseInt(x)
  // console.log(typeof(x))
  // console.log(typeof(x))


  // Number to String
  // num=999
  // num=String(num)
  // console.log(typeof num)


  //string to boolean

  // 0, undefined, null  and  empty string  gives false baaku true
  // let x="h"
  // console.log(Boolean(x))



  // if else statement
      // if(true){
      //   console.log("hi")
      // }

      // else{
      //   console.log("no")
      // }


      // let age=30
      // if(age>50){
      //    console.log("old")

      // }
      // else if(age == 20){
      //    console.log("adult")

      // }
      // else{
      //    console.log("child")
      // }

      //switch cases

      // switch("Thursday"){
      //    case "Sunday":{
      //       console.log("Sunday")
      //       break;

      //    }

      //    case "Monday":{
      //       console.log("Monday")
      //       break;

      //    }


      //    case "Tuesday":{
      //       console.log("Tuesday")
      //       break;

      //    }

      //    default:{
      //        console.log("Not Matched")

      //    }

      // }



let day=3;

switch(day){ 
   case 1:{
       console.log("Sunday")
       break;

   }
   case 2:{
       console.log("Monday")
       break;

   }
   case 3:{
       console.log("Tuesday")
       break;

   }
   case 4:{
       console.log("Wednesday")
       break;

   }
   case 5:{
       console.log("Thursday")
       break;

   }
   default:{
      console.log("Invalid day")

   }
   
}

