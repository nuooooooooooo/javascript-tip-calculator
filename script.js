document.getElementById("container").onchange = function () {
  // grab user input
  let bill = Number(document.getElementById("billTotal").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;
  // assign input to output IDs so they can appear on screen
  document.getElementById("tipOutput").innerHTML = +tipPercent + " %";
  document.getElementById("splitOutput").innerHTML = split;
  //   calculate tip and new bill values
  let tipValue = bill * (tipPercent / 100);
  let newBillEach = (bill + tipValue) / split;
  let tipEach = tipValue / split;
  document.getElementById("newBill").innerHTML = newBillEach.toFixed(2) + " €";
  document.getElementById("tipPerP").innerHTML = tipEach.toFixed(2) + " €";
  document.getElementById("people").innerHTML =
    split == 1 ? "personne" : "personnes";
};
