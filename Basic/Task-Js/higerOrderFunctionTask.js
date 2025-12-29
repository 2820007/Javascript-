// 1. Write a function that filters out even numbers from an array.


// let arr=[1,2,3,4,6,7,8,40,5]
// const filterEven=arr.filter((item)=>{
//     return item%2==0
    
//     }
  
// )
// console.log(filterEven)


// 2. Filter an array to include only odd numbers.

// let arr=[1,2,3,4,6,7,8,40,5]
// const filterEven=arr.filter((item)=>{
//     return item%2 !==0
    
//     }
  
// )
// console.log(filterEven)

     
   
// 3. Given an array of strings, filter out strings that have more than 3 characters.

// let arr = ["cat", "apple", "dog", "banana", "pen"];

// const newArray = arr.filter((item)=>{
//     if(item.length>3){
//         console.log(item)
//     }
//       return item
// });






// 4. Write a function that filters out negative numbers from an array.

//  let  arr=[1,2,-3,4,-6,7,-8]
//   const negativeValue=arr.filter((item)=>{
//     if(item<0){
//         console.log(item)
//     }
//   })




// 5. Given an array of boolean values, filter out the `true` values.

//   let arr=[false,true,true,false,false,true]
//        const trueValue=arr.filter((item)=>{
//          return item==true
//        })
//        console.log(trueValue)
       
      

 


// 6. Filter an array of strings to include only those that contain the letter 'a'.

        // let str=["ravi","akash","radha","bicky",""]
        //   const strContain=str.filter((item)=>{
        //     return item.includes("a")
        //   })
        //  console.log(strContain)
        



// 7. Filter an array of numbers to return only those greater than 5.
    //  let arr=[2,3,4,5,6,7,8,9]
    //  const greaterValue=arr.filter((item)=>{
    //     return item>5
    //  })
    //  console.log(greaterValue)


// 8. Write a function that filters out empty strings from an array.
    // let arr=["ravi", " ", "anup","aditya"," "]
    //  const emptyString=arr.filter((item)=>{
    //     return item ===" "

    //  })
    //  console.log(emptyString)



// 9. Write a function that maps an array of numbers to an array where each number is doubled.
//    let arr=[2,3,4,5,6,7,9]
//    const doubleNumber=arr.map((item)=>{
//       return item*2
//    })
//   console.log(doubleNumber)


// 10. Convert an array of numbers into an array of strings using `map`.
    //  let numbers = [1, 2, 3, 4, 5];

//       const numToStr = numbers.map((item)=>{
//        return item.toString()
       


//      });

// console.log(numToStr);

// 11. Write a function that converts an array of strings to uppercase using `map`.
//   let str = ["ravi","anup","aditya","niraj"];

//       const strToUpper= str.map((str)=>{
//        return str.toUpperCase()
       


//      });

// console.log(strToUpper);


// 12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the
// number is negative).

    //  let numbers = [5, -3, 0, 8, -1];

    // const positiveOrNegative = numbers.map(item => item >= 0);

    //   console.log(positiveOrNegative);





// 13. Write a function that adds 1 to each number in an array using `map`.
        // let arr=[1,2,3,4,5,6,7]
        //   const addOne=arr.map((item)=>{
        //      return item+1
        //   })
        //   console.log(addOne)

// 14. Given an array of strings, return an array of the first letter of each string using `map`.
        // let str=["ravi","anup","aditya","rahul","suraj"]
        // const arrFirst=str.map((item)=>{
        //      return item[0]
        // })
        // console.log(arrFirst)


// 15. Convert an array of strings to an array of their lengths using `map`.

//  let str=["ravi","anup","aditya","rahul","suraj"]
//         const newArrLength=str.map((item)=>{
//              return item.length
//         })
//         console.log(newArrLength)
    
// 16. Write a function that squares each number in an array using `map`.
    //  let arr=[2,3,4,5,6,7,8]
    //  const sqrArr=arr.map((item)=>{
    //     return item*2
    //  })
    //  console.log(sqrArr)



// 17. Use `forEach` to log each element of an array to the console.
    //  let arr=[2,3,4,5,6,7,8]
    //  const newArray=arr.forEach((item,index)=>{
    //     console.log(item + "-"+ index)
    //  })
    //  
      
// 18. Write a function that uses `forEach` to calculate the sum of an array of numbers.
    // let arr = [10, 20, 30, 40];
    // let sum=0
    // const sumArray=arr.forEach((item)=>{
    //     sum =sum+item

       
//     // })
//     // console.log(sum)





// // 19. Use `forEach` to multiply each number in an array by 2 and log the results.

//     let arr = [10, 20, 30, 40];
    
//     const sqrArr=arr.forEach((item)=>{
//            console.log(item*2)

       
//     })
   
    
// 20. Use `forEach` to log each string in an array in uppercase.

    //  let str=["ravi","anup","niraj","palash"]
    //    const upperArr=str.forEach((item)=>{
    //     console.log(item.toUpperCase())
        
    //    })
       
// 21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings.

    //  let str=["ravi","anup","niraj","palash"]
    //  const  newArray=str.forEach((item)=>{
    //     console.log(item + "!")
    //  })


// 22. Use `forEach` to log the index and value of each element in an array.

    // let arr=[2,3,4,5,6,7,8]
    //  const newArray=arr.forEach((item,index)=>{
    //     console.log(index + "-"+ item)
    //  })
    
  
     
// 23. Use `forEach` to log only the odd numbers from an array.
    //  let arr=[2,3,4,5,6,7,8]
    //  const newArray=arr.forEach((item)=>{
    //      if(item%2==0){
    //         console.log(item)
    //      }
    //  })
     
// 24. Write a function that uses `forEach` to log numbers greater than 10 from an array.
    //    let arr=[2,3,4,5,6,12,3,44,56,8]
   
    //  const newArray=arr.forEach((item)=>{
    //     if(item>10){
    //         console.log(item)
    //     }
    //  })
     
// 25. Use `forEach` to concatenate all strings in an array into a single string and log it.
// let str = ["ravi", "anup", "radha", "niraj"];
//    let concatStr = "";

//   str.forEach((item) => {
//   concatStr = concatStr.concat(item);
// });

// console.log(concatStr);
