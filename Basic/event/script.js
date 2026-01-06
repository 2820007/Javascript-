//event handeling
// on hunxh

// addEventlistner

// const show=()=>{
//     alert("show")
// }


// const btn=document.querySelector("#btn")
// const first=document.querySelector(".first")

// btn.addEventListener("click",()=>{
   
// })

// btn.addEventListener("mouseover",()=>{
//     alert("addEventListner")
//  })
// btn.removeEventListener("click",()=>{
//     alert("addEventListener")
// })

// function handleClick() {
//     alert("clicked");
// }

// btn.addEventListener("click", handleClick);

// btn.removeEventListener("click", handleClick);





const btn = document.querySelector("#btn");
const first = document.querySelector(".first");

let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    first.style.backgroundColor = "black";
    first.style.color = "white";
    btn.innerText = "change color to white";
    isTrue = false;
  } else {
    first.style.backgroundColor = "white";
    first.style.color = "black";
    btn.innerText = "change color to black";
    isTrue = true;
  }
});
