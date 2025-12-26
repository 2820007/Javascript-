

// function addTwo(){
//     console.log("add two numbers")

//     return 1;
// }
// addTwo()

// let x=addTwo()
// console.log(x)
// console.log(addTwo())


//add function

// const addTwo=function(a,b){ //passing a and b as parameter
//     return a+b

// }
// let sum=addTwo(2,4)
// console.log(sum)



// const subTwo=function(a,b){
//     return a-b
// }
// let sub=subTwo(6,4)
// console.log(sub)

// const mulTwo=function(a,b){
//     return a*b
// }

// let mul=mulTwo(6,4)
// console.log(mul)
// const divTow=function(a,b){
//     return a/b
// }
// let div=divTow(6,3)
// console.log(div)


// const evenNum=function(num){
//     if(num%2==0){
//         console.log("even number")
//     }
//     else{
//         console.log("odd number")
//     }

// }

// evenNum(4)


// const printNum=function(num){
//    for(let i=1; i<=num; i++)
//    {
//     console.log(i)
//    }

// }

// printNum(4)

//print even number 1to nth
// const printEven=function(num){

//    for(let i=1; i<=num; i++)
//    {
//     if(i%2==0){
//         console.log(i)
//     }
//    }

// }

// printEven(40)

//sum of even number 1 to  nth natural number


// const printSum=function(num){
//     let sum=0;

//    for(let i=1; i<=num; i++)
//    {
//     if(i%2==0){
//         sum +=i
//     }
//    }
//    console.log(sum)

// }

// printSum(10)



// factorial of number
// let n = 5;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }

// console.log(fact);


// const factNum=function(n){
//     let fact=1
//     for(let i=1; i<=5; i++)
//     {
//         fact=fact*i

//     }
//     console.log(fact)

// }
// factNum(5)





// function primNum(n){

    
//     let prime=true
   
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             prime=false
//             break;
           
//         }
       
//     }
//      if(prime){
//             console.log("prime number")
//         }
//         else{
//             console.log(" not prime number")
//         }
    

// }
// primNum(0)

//palindrome

// let str = "level";
// let isPalindrome = true;

// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }


// faboniki series


// function fibonacci(n) {
//   let a = 0, b = 1;

//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }

// fibonacci(10); 








// // arrow function


//   const hello=()=>{

//     console.log("Hello developer");
//       }

//   hello()

  //single line code x vane
//   const add=(a,b)=>a+b
//   console.log(add(4,4))

// (function(){
//     console.log("hello") //Immidiatly Invoke function
// }
// )()



//Inner and Outer Function

// function outer(){
//     function inner(){
//         console.log("inner function")
//     }
//     return inner
// }

// const inner=outer()
// inner()



//CallBack function


// const first=()=>{
//     console.log("first")
// }


// const second=()=>{
//     console.log("second")
// }
// second(first())



// const second=(f,x)=>{
//     f(x)
//     console.log("second")
// }


//  second((a)=>{
//     console.log("first",a)

//  },120)


// const evenOrodd=(f,x)=>{
//     f(x)

// }
// evenOrodd((a)=>{
//     if(a%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }

// },10)


// setInterval(()=>{
//     console.log("setInterval");

// },1000)

//Default parameterized function
// const add=(a,b=56)=>{
//     console.log(a+b)

// }
// add(23)







