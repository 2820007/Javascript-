// //always use dry principle(do not repeat yourself)
// //object 
// //class


// class User{
//     constructor(userName,userPhone){
//         this.name=userName
//         this.phone=userPhone
//     }
//     walk=()=>{
//         console.log("walk")


//     }

//     info=()=>{
//         console.log(this.name)
//         console.log(this.phone)
//     }

// }

// const u1=new User("Ravi",9888888788)
// const u2=new User("Aditya",903847474)
// // console.log(u1.name)
// // // console.log(u2)
// // u2.info()





// //Inheritance

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     eat=()=>{
//         console.log("Eat")
//     }
// }

// class Student extends Person{
//     constructor(name,age,roll_no){
//         super(name,age)
//         super.eat
//         this.roll_no=roll_no
//     }
// }
// class Emp extends Person{
//     constructor(name,age,dept){
//         super(name,age)
//         super.eat
//         this.dept=dept
//     }
// }

// const s1=new Student("Ravi",23,2820007)
// console.log(s1)
// const e1=new Emp("Ravi",30,"It")
// console.log(e1)