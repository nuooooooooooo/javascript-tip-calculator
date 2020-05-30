document.getElementById("container").onchange = function () {
  // grab user input
  let bill = document.getElementById("billTotal").value;
  // convert string to number and replace commas by dots
  bill = Number(bill.replace(",", "."));

  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;
  // assign input to output IDs so they can appear on screen
  document.getElementById("tipOutput").innerHTML = +tipPercent + " %";
  document.getElementById("splitOutput").innerHTML = split;
  //   calculate tip and new bill values
  let tipValue = bill * (tipPercent / 100);
  let newBillEach = (bill + tipValue) / split;
  let tipEach = tipValue / split;
  // assign input to output IDs so the values appear on screen
  document.getElementById("newBill").innerHTML = newBillEach.toFixed(2) + " €";
  document.getElementById("tipPerP").innerHTML = tipEach.toFixed(2) + " €";
  document.getElementById("people").innerHTML =
    split == 1 ? "personne" : "personnes";
};
