document.getElementById("rollButton").addEventListener("click", function () {
  // Roll two dice
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var sum = dice1 + dice2;

  // Construct the result message
  var resultMessage = "You rolled " + dice1;
  // Display the result in an alert
  alert(resultMessage);
});
