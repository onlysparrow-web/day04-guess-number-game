let gNumber, tries, lastSeenNumber;
alert("welcome");
person = prompt("Name of the player", "");
alert("Hey " + person + " Welcome to the game ");
secretNumber = 6;
n = 5;
for (tries = 1; tries <= n; tries++) {
  gNumber = prompt("Guess the secret number between 1 - 9 ", "");
  if (gNumber > 9 || gNumber < 1) {
    alert("Entered number is out of range");
    tries = tries - 1;
    continue;
  }

  if (lastSeenNumber == gNumber) {
    tries = tries - 1;
    alert("The number entered is same as previous number");
  } else if (gNumber < secretNumber) {
    alert("Entered number is smaller than the secret number");
  } else if (gNumber > secretNumber) {
    alert("Entered number is larger than the secret number");
  } else {
    alert(
      "congragulation on guessing the secret number,the number of tries used :" +
        tries
    );
    alert("tries remaining is :" + (n - tries));
    break;
  }
  lastSeenNumber = gNumber;
  alert("tries remaining is :" + (n - tries));
}
