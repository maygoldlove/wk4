let increase=document.querySelector("#increase");
let decrease=document.querySelector("#decrease");
let counterValue=document.querySelector("#counterValue");

let counter = 0;

increase.addEventListener("click",()=>{
    counter++;
    counterValue.innerText = counter;
})
;
decrease.addEventListener("click", ()=>{
    counter--;
    counterValue.innerText = counter; 
});