//promise 
//javascript is synchronous programming language
//promise le synchronous code lai asynchronous banai dinx..
//promise ko 3 state hunch resolve,reject and pending
//synchronous line by line hunch


// const p=new Promise((resolve,reject)=>{
//     let isData=false
//     if(isData){
//         console.log("data found")
//     }
//     else{
//         console.log(" data not found")
//     }

// })
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

//JSON -javascript Object Notation
// Universal accepted data types
//e.g
// const jData={
//     "name":"ravi",
//     "age":24
// }

// const user={
//     name:"ravi",
//     age:23
// }
// console.log(JSON.stringify(user))
// console.log(JSON.parse(jData))





// let res=fetch("https://dummyjson.com/products",{
//     method:"GET"
// });


// res.then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data.products)
// }).catch((err)=>{
//     console.log(err)
// })


//fetch
async function getUsers() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // data.products.forEach((item) => {
    //   console.log(item.price);
    // });

    data.products.reduce((acc,item)=>{
        console.log(acc+item.price)
        
    })

  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();







