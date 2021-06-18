
const addBtn = document.querySelector(".add");
const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const numberID = document.querySelector("#number");
let number = 0

addBtn.addEventListener("click", () => numberID.innerHTML++);
decBtn.addEventListener("click", () => numberID.innerHTML--);
resetBtn.addEventListener("click", () => numberID.innerHTML=0);
