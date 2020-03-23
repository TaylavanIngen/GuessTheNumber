//Functie

let tries;
let winGame = false;
let user;


const guessNumber = function(userInput) {


  for (tries = 4; tries >= 0; tries--) {
    userInput = parseInt(prompt("Please enter a number from 0 to 25"));
    let cpuInput = Math.floor(Math.random() * 26);



    if (userInput > 25 || isNaN(userInput) == true) {
      alert("This is not a valid number, try again.");
      tries++;
    } else {


      if (cpuInput == userInput) {
        let winGame = true;
        alert("Congratulations! You picked " + userInput + " and the computer picked " + cpuInput + ". You have won!");
        alert("Bye " + user + "!");
        break
      } else {
        if (tries == 0 && winGame == false) {
          alert("You lost the game. Thank you for playing, " + user + "!");
          break
        } else {
          let tryagainConfirm = confirm("Aw, that's a bummer. You picked " + userInput + " and the computer picked " + cpuInput + ". Do you wanna try again?");
          if (tryagainConfirm == true) {

            if (tries == 1) {
              alert("Warning, this is your last shot!");
            } else {

              alert("You have " + (tries) + " tries left!");

            }
          } else {
            alert("Bye " + user + "!");
            break

          }


        }
      }
    }
  }
}







//START GEBRUIKER

while (user === "" || user == null) {
  user = prompt("Hello, what is your name?", "Mark Rutte");
  if (user != "" && user != null) {
    let gameConfirm = confirm("Nice to meet you, " + user + "! Are you ready to play a game?");
    if (gameConfirm === true) {
      guessNumber();

    } else {
      alert("What a bummer!");

    }
  }
}
