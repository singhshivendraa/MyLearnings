/* Script.js */

// Custom functions
function calculateTip(){
  var billAmount = document.getElementById("billAmount").value;
  var serviceSatisfaction = document.getElementById("serviceSatisfaction").value;
  var numPeople = document.getElementById("totalPeople").value;

  //Validation
  if(billAmount === "" || serviceSatisfaction == 0){
    return window.alert("Please enter a value");
  }

  // Check
  if(numPeople === "" || numPeople <= 1){
    numPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Math
  var total = (billAmount * serviceSatisfaction) / numPeople;
  total = Math.round (total * 100) / 100;
  total = total.toFixed(2);

  // Display
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

// Hide tip amount
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click
document.getElementById("calculate").onclick = function() { calculateTip(); };
