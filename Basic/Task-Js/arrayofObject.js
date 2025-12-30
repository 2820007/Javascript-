// let products=[{
//     id:1,
//     name:"iphone 17",
//     price:200000,
//     quantity:20,

// },
// {
//     id:2,
//     name:"iphone 17 plus",
//     price:200000,
//     quantity:20,

// }
// ,
// {
//     id:2,
//     name:"iphone 17 pro",
//     price:250000,
//     quantity:10,

// }
// ,
// {
//     id:3,
//     name:"iphone 13",
//     price:100000,
//     quantity:230,

// },
// {
//     id:4,
//     name:"iphone 12",
//     price:89000,
//     quantity:30,

// },
// {
//     id:5,
//     name:"iphone 11",
//     price:70000,
//     quantity:212,

// }



// ]


// console.log(products[0])
// console.log(products)
// products.forEach((item)=>{
//     console.log(item.name)
// })


// /1. wrt a function that will calculate the total number of quantity of all products 
   
// const totalQuant=()=>{
//     return products.reduce((acc,item)=>{
//         return acc+item.quantity
//     },0)
// }
// console.log(totalQuant())


//  wrt a function that will  calculate  the total  price of iphone 11.
       
//  let mobile = products.find((item) => {
//   return item.name == "iphone 11";
// });
// console.log(mobile);
// console.log(mobile.quantity * mobile.price);

//. wrt a function that will calculate the total number of quantity of all products 

        //   const totalQuant=()=>{
        //     return  products.reduce((acc,item)=>{
        //         return acc+item.quantity
        //     },0)
        //   }
        //   console.log(totalQuant())
    



//    wrt a function that will calculate the total price all product whose id is odd.
//    let newProduct = () => {
//   const filterProduct = products.filter((item) => {
//     return item.id % 2 !== 0;
//   });

//   return filterProduct.map((item) => {
//     return {
//         ...item,
//         price:item.price * 2

//     };
//   });
// };

// console.log(newProduct())
 

//3. wrt a function that will find out more  than 5000 product price(filter)
 

    // const newProduct=()=>{
    //      return products.filter((item)=>{
    //         if(item.price>80000){
    //             console.log(item)
    //         }
    //      })
    // }

    // newProduct()

    //2. wrt a function that will calculate the total price all product(reduce)

    // const totalPrice=()=>{
    //     return  products.reduce((acc,item)=>{
    //         return acc+item.price
    //     },0)
    // }
    // console.log(totalPrice())


    //4. wrt a function that will  print the price of iphone.(find)

    // const priceIphone=()=>{
    //     return products.find((item)=>{
    //         return item.name=="iphone 11"
    //     })
    // }
    // console.log(priceIphone())
