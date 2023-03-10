// inputs
const inputBill = document.querySelector("#input-bill");
const numberPeople = document.querySelector("#number-people");
const lost= document.querySelector("#lost")
// button
const percentageFive = document.querySelector("#percentage-5");
const percentageTen = document.querySelector("#percentage-10");
const percentageFifteen = document.querySelector("#percentage-15");
const percentageTwenty = document.querySelector("#percentage-25");
const percentageFifty = document.querySelector("#percentage-50");
const reset = document.querySelector(".reset");
// span
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

function calculateTip   (percentage) {
  const bill = Number(inputBill.value);
  const people = Number(numberPeople.value);

  if (!bill || !people) {
    alert("Debes rellenar todos los campos");
    return;
  }

  // Si no estan vacios debemos hacer el calculo
  // (bill * 5/100) / people
  const result = (bill * (percentage / 100)) / people;
  // total = bill + (bill * 0.05)
  const rtotal = (bill + bill * (percentage / 100)) / people;

  tip.textContent = `S/ ${result.toFixed(2)}`;
  total.textContent = `S/ ${rtotal.toFixed(2)}`;
}

percentageFive.onclick =  () =>  calculateTip(5);
   


percentageTen.onclick = function () {
    calculateTip(10)
}

reset.onclick = () => {
    inputBill.value ="";
    numberPeople.value = "";
    lost.value ="";
    tip.value= "S/ 0.00";
    total.value = "S/ 0.00";
    
    inputBill.focus();
}
