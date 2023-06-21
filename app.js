const addBtn = document.getElementById("add_btn");
const subBtn = document.getElementById("sub_btn");
const resetBtn = document.getElementById("reset_btn");
const recordBtn = document.getElementById("record_btn");
const buttonsSection = document.querySelector(".buttons");
const recordedList = document.querySelector(".recorded_list");
const lastNumber = document.querySelector(".last_number");

let number = 0;
let numbersList = [];

subBtn.onclick = deduct;
addBtn.onclick = count;
resetBtn.onclick = reset;
recordBtn.addEventListener("click", () => {
  numbersList.push(number);
  let li = recordedList.appendChild(document.createElement("li"));
  li.innerText = `Last Recorded Number : ${number}`;
});

function count() {
  number += 1;
  lastNumber.innerHTML = `Number : ${number}`;
}

function deduct() {
  number -= 1;
  if (number < 1) {
    number = 0;
  }
  lastNumber.innerHTML = `Number : ${number}`;
}

function reset() {
  number = 0;
  numbersList = [];
  let listNodes = document.querySelectorAll("li");
  for (let index = 0; index < listNodes.length; index++) {
    const element = listNodes[index];
    element.remove();
  }
  lastNumber.innerHTML = `Number : ${number}`;
}
