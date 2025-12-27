// 1. Question: Write a function that adds the number `7` at the end of the array `let arr = [1, 2, 3, 4];` using
// the `push` method. What is the new array?

//    let arr=[1,2,3,4]
//   const addSeven=(arr)=>{
//      arr.push(7)
//      return arr
//   }
//   let newArray=addSeven(arr)
//   console.log(newArray)




// 2. Question: Given an array `let arr = ['apple', 'banana'];`, use the `pop` method to remove the last
// element. What is the modified array?

// let arr = ['apple', 'banana'];

// arr.pop()
// console.log(arr)




// 3. Question: Use the `shift` method to remove the first element from the array `let arr = [10, 20, 30, 40];`.
// What does the array look like afterward?

// let arr = [10, 20, 30, 40];

//  arr.shift()
//  console.log(arr)



// 4. Question: Write a function that adds the element `'start'` at the beginning of the array `let arr =
// ['middle', 'end'];` using the `unshift` method. What is the new array?


// let arr =['middle', 'end'];
// arr.unshift("start")
// console.log(arr)



// 5. Question: Convert the array `let arr = ['one', 'two', 'three'];` to a string using the `toString` method.
// What is the resulting string?

// let arr = ['one', 'two', 'three'];
// let string=arr.toString()
// console.log(string)



// 6. Question: Given an array `let arr = ['cat', 'dog'];`, use the `concat` method to combine it with another
// array `['fish', 'bird'];`. What is the resulting array?

// let arr = ['cat', 'dog'];
// let array=['fish','bird']
// let conCat=arr.concat(array)
// console.log(conCat)










// 7. Question: Use the `slice` method to extract the first two elements from the array `let arr = ['red', 'green',
// 'blue'];`. What does the new array look like?

// let arr = ['red', 'green', 'blue'];
// let newArray=arr.slice(0,2)
// console.log(newArray)




// 8. Question: Write a function that removes the last element from the array `let arr = ['x', 'y', 'z'];` and then
// adds `'a'` at the beginning using the `unshift` method. What is the final array?


// let arr = ['x', 'y', 'z'];

// const remove=(arr)=>{
//     arr.pop()
//     arr.unshift("a")
//     return arr



// }
// let newArray=remove(arr)
// console.log(newArray)





// 9. Question: Use the `toString` method to convert the array `let arr = [100, 200, 300];` to a string, and
// then find out the length of the resulting string. What is the length?


// let arr = [100, 200, 300];
// let string=arr.toString()
// console.log(string)
// console.log(string.length)


// 10. Question: Write a function that uses the `push` method to add both `'orange'` and `'grape'` to the end
// of the array `let arr = ['apple', 'banana'];`. What is the new array?

// let arr = ['apple', 'banana'];

// const addArray=(arr)=>{
//     arr.push("orange")
//     arr.push("grape")
//     return arr
// }
// let newArray=addArray(arr)
// console.log(newArray)

// 11. Question: Use the `shift` method to remove the first element from the array `let arr = ['sun', 'moon',
// 'stars'];`. What is the modified array?

// let arr = ['sun', 'moon','stars'];
// arr.shift()
// console.log(arr)


// 12. Question: Write a function that adds the number `42` at the beginning of the array `let arr = [7, 14,
// 21];` using the `unshift` method. What is the resulting array?

// let arr = [7, 14,21];
// arr.unshift(42)
// console.log(arr)



// 13. Question: Given an array `let arr = [5, 10, 15, 20];`, use the `pop` method to remove the last element
// and store it in a variable. What is the value of the variable?

// let arr = [5, 10, 15, 20];
// let newArray=arr.pop()
// console.log(newArray)


// 14. Question: Convert the array `let arr = ['hello', 'world'];` to a string using the `toString` method, and
// then split the string back into an array using the `split(',')` method. What is the resulting array?

// let arr = ['hello', 'world']
// let string=arr.toString()
// let newArray=string.split(",")
// console.log(newArray)

// 15. Question: Use the `concat` method to combine the arrays `let arr1 = ['x', 'y'];` and `let arr2 = [1, 2];`.
// What is the resulting array?

// let arr1 = ['x', 'y'];
// let arr2 = [1, 2];
// let finalArray=arr1.concat(arr2)
// console.log(finalArray)


// 16. Question: Write a function that adds the number `99` at the end of the array `let arr = [1, 2, 3, 4];`
// using the `push` method, and then removes the first element using the `shift` method. What is the final
// array?

// let arr = [1, 2, 3, 4];
// arr.push(99)
// arr.shift()
// console.log(arr)
// 17. Question: Use the `slice` method to extract the last two elements from the array `let arr = ['a', 'b', 'c',
// 'd'];`. What is the resulting array?

// let arr = ['a', 'b', 'c','d'];

// let newArray=arr.slice(2,4)
// console.log(newArray)

// 18. Question: Write a function that adds both `'lion'` and `'tiger'` at the beginning of the array `let arr =
// ['elephant', 'giraffe'];` using the `unshift` method. What is the new length of the array?



// let arr =['elephant', 'giraffe'];

// const addArray=(arr)=>{
//     arr.unshift("lion")
//     arr.unshift("tiger")
//     return arr
// }
// let newArray=addArray(arr)
// console.log(newArray)
// console.log(newArray.length)


// 19. Question: Convert the array `let arr = [20, 30, 40];` to a string using the `toString` method, and then
// convert the string back to an array using the `split(',')` method. What is the final array?


// let arr = [20, 30, 40];
// let string=arr.toString()
// let newArray=string.split(",")
// console.log(newArray)



// 20. Question: Use the `push` method to add `'grape'` to the array `let arr = ['apple', 'banana', 'orange'];`,
// and then use the `pop` method to remove the last element. What is the resulting array?

// let arr = ['apple', 'banana', 'orange'];
// arr.push("grape")
// arr.pop()
// console.log(arr)






// Find Even Numbers:
//  - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.

    //   let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
    //   for(let i=0; i<arr.length; i++){
    //     if(arr[i]%2 ==0){
    //         console.log(arr[i])
    //     }

    //   }




// 2. Find Odd Numbers:
//  - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.

// let arr=[10, 15, 20, 25, 30]
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]%2 !==0){
//         console.log(arr[i])
//     }
// }



// 3. Sum of Array Elements:
//  - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`.

// let arr=[5, 10, 15]
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum +=arr[i]
// }
// console.log(sum)


// 4. Find Maximum Value:
//  - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.

// let arr = [3, 5, 7, 2, 8];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);



// 5. Find Minimum Value:
//  - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.

// let arr=[12, 4, 6, 9,1]
// let min=arr[0]
// for(let i=1; i<arr.length; i++)
// {
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min)

// 6. Count Array Elements:
//  - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`.

// let arr=[8, 3, 7, 5]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr.length)



// 7. Multiply Array Elements:
//  - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result.

//   let arr=[2,3,4]
// let mul=1
//   for(let i=0; i<arr.length; i++){
//     mul= arr[i]*mul
    
//   }
//   console.log(mul)

// 8. Check for a Specific Number:
//  - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found"
// or "Not Found".


// let arr = [5, 6, 7, 8];
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

// 9. Remove Duplicates:
//  - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the
   
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < uniqueArr.length; j++) {
//     if (arr[i] === uniqueArr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (!isDuplicate) {
//     uniqueArr.push(arr[i]);
//   }
// }

// console.log(uniqueArr);

// new array.
// 10. Create an Array with Squares:
//  - Write a code to create a new array containing the squares of the elements from the array `[1,
// 2, 3]`.


// let  arr=[1,2,3]
// let squareArr=[]

// for(let i=0; i<arr.length; i++){
//     squareArr.push(arr[i]*arr[i])

// }
// console.log(squareArr)


// 11. Filter Numbers Greater than 10:
//  - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`.


// let arr=[5, 12, 7, 14, 3]
// let num=10;
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>num){
//         console.log(arr[i])
//     }
// }

// 12. Combine Two Arrays:
//  - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let newArray=arr1.concat(arr2)
// console.log(newArray)
// console.log(newArray.length)


// 13. Find Array Length:
//  - Write a code to print the length of the array `[9, 7, 5, 3, 1]`.

// let arr=[9, 7, 5, 3, 1]
// console.log(arr.length)


// 14. Find Average Value:
//  - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`.
// let arr=[10, 20, 30]
// let avg;
// let sum=0

// for(let i=0; i<arr.length; i++){
// sum = sum+arr[i]
// avg=sum/3
// }
// console.log(avg)


// 15. Reverse an Array:
//  - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array.
// let arr=[1, 2, 3, 4, 5]

// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])

// }



// 16. Find Common Elements:
//  - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3,4]

// let arr1=[1,2,3]
// let arr2=[2,3,4]

// for(let i=0; i<arr1.length;i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i])
//         }
//     }
// }


// 17. Split Array into Two:
//  - Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one
// with the second half.

// let arr=[1, 2, 3, 4, 5]
//   let firstHalf=[];
//   let secondHalf=[];
//   let mid=arr.length/2;

//   for(let i=0; i<arr.length; i++){
//     if(i<mid){
//         firstHalf.push(arr[i])
//     }
//     else{
//         secondHalf.push(arr[i])
//     }
//   }
//   console.log(firstHalf)
//   console.log(secondHalf)


// 18. Find Index of an Element:
//  - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`.

//   let arr=[10, 20, 5, 30];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]==5){
//         console.log(arr.indexOf(arr[i]))
//     }
//   }

// 19. Check if Array Contains a Number:
//  - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No".

//    let arr=[2,4,6,8]
//    let found=false;
//    for(let i=0; i<arr.length; i++){
//     if(arr[i]===4){
//         found =true
//         break
//     }
  
//    }
//    if(found){
//     console.log("Yes")
//    }
//    else{
//     console.log("No")
//    }


// 20. Create an Array with String Lengths:
//  - Write a code to create a new array containing the lengths of each string from the array
// `["apple", "banana", "cherry"]`.

// let arr=["apple", "banana", "cherry"]

// let newArray=[]
// for(let i=0 ; i<arr.length;i++){
//    newArray.push(arr[i].length)
// }

// console.log(newArray)








