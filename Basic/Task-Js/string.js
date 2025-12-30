// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.
  

//    let str="Hello EveryOne"
//    let counts=0
//    for(let i=0; i<str.length;i++){
//     if(str[i]=="e"){
//         counts++
//     }
//    }
//    console.log(counts)




// 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `ifelse` statements.
    // let str="Hello EveryOne"
    // if(str.startsWith("H") && str.endsWith("e")){
    //     console.log("yes present that string")

    // }
    // else{
    //     console.log("Not present that string")
    // }
    
// 3. Write a program that loops through a string and prints only the uppercase letters.

//   let str="Hello EveryOne"
//   for(let i=0; i<str.length;i++){
//     if(str[i] >="A" && str[i]<="Z"){
//         console.log(str[i])

//     }
//   }


// 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given
// string.
//   let str="Hello EveryOne"
//   let newStr=""
//   for(let i=0; i<str.length;i++){
//     if(str[i]=="H"
//         &&str[i+1]=="e"
//         &&str[i+2]=="l"
//         &&str[i+3]=="l"
//         &&str[i+4]=="o"
//     ){
//         newStr=newStr+"Hi"
//         i=i+4

//     }
//     else{
//         newStr=newStr+str[i]
//     }
//   }
//   console.log(newStr)

// 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.
//    let str="Hello EveryOne"
//    let counts=0;
//    for(let i=0; i<str.length; i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         counts++
//     }
//    }
//    console.log(counts)

// 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello
// EveryOne"` to form a new string.

//  let str = "Hello EveryOne"
// let newStr = ""

// newStr =newStr+str[0]


// for (let i = 1; i < str.length; i++) {
    
//     if (str[i - 1] === " ") {
//         newStr += str[i]
//     }
// }

// console.log(newStr)




// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `ifelse` statements.

    //  let str="radar"
    //  let rvs=""
    //  for(let i=str.length-1; i>=0; i--){
    //     rvs +=str[i]

    //  }

    //  if(str===rvs){
    //     console.log("string is palindrome")
    //  }
    //  else{
    //     console.log("not palindrome")
    //  }


// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the
// string is empty.

//    let str=" Hello World "
//    let newStr=str.trim()
//    console.log(newStr)
//    if(newStr===""){
//     console.log("empty")
//    }
//    else{
//     console.log("not empty")
//    }


// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and
// to uppercase if it’s lowercase.

//   let str="Hello EveryOne"
//   let newStr=""
//   for(let i=0; i<str.length; i++){
//     if(str[i] >="A" && str[i]<="Z"){
//         newStr +=str[i].toLowerCase()
//     }
//     else if(str[i]>="a" && str[i]<="z"){
//         newStr +=str[i].toUpperCase()

//     }

  
//   else{
//    newStr +=str[i]

//   }
// }
// console.log(newStr)

// 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to
// `"Hello"`.

//  let str="Hello EveryOne"
//  let newStr=str.slice(0,5)
//  console.log(newStr)
//  if(newStr =="Hello"){
//     console.log("Equal")
//  }
//  else{
//     console.log("not Equal")
//  }



// 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop.

//  let str="Hello Everyone"
 
//  let newStr=""
//  for(let i=0; i<str.length;i++){
//     if(str[i]=="a" || str[i]=="e" ||str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         newStr +="*"
//       }
//       else{
//         newStr +=str[i]
//       }
//  }
//  console.log(newStr)

// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it
// does, replace it with `"Hi"`.

// let str="Hello World"
// let newStr=""
// if(str.includes("Hello")){
//     newStr=str.replace("Hello","Hi")
// }
// else{
//     newStr =str
// }
// console.log(newStr)
// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`.

//  let str="Hello  EveryOne"
//  let counts=0;
//  for(let i=0; i<str.length; i++){
//     if(str[i]==" "){
//         counts++
//     }
//  }
//  console.log(counts)

// 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in
// uppercase; otherwise, print it in lowercase.

    // let str="Hello Everyone"
    // let newStr=""
    // if(str.length>10){
    //     newStr +=str.toUpperCase()
        
    // }
    // else{
    //     newStr += str.toLowerCase()
    // }
    // console.log(newStr)

// 15. Create a program that loops through a string and prints the index of each letter 'o' in the string
// `"Hello EveryOne"`.

// let str="Hello Everyone"
// for(let i=0 ; i<str.length;i++){
//     if(str[i]=="o"){
//         console.log(i)
//     }
// }
// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements.

// let str="Hello World "
// let newStr=str.trim()
// if(newStr.length%2==0){
//     console.log("even length")
// }
// else{
//     console.log("odd")
// }

// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use
// `if-else` statements to print the result.
// let str="Hello EveryOne"
// if(str[0] == str[str.length-1]){
//     console.log("same")
// }
// else{
//     console.log("Not same")
// }

// 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else`
// statements.
//    let str = "Hello Everyone"
// let newStr = ""

// if (str.length >= 3) {
//     newStr = "ABC" + str.slice(3)
// } else {
//     newStr = str
// }

// console.log(newStr)

// 19. Create a program that uses a loop to reverse a string and print the reversed string.

// let str="Hello EveryOne"
// for(let  i=str.length-1; i>=0;i--){
//     console.log(str[i])

// }