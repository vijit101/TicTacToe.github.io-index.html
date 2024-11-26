// $("b1").click(function () {
//     $("b1").html("0");
//     console.log("click Detected");
// });

let allButtons = document.querySelectorAll(".button");
let pTurnText = document.querySelector("h2");
let resetBtn = document.querySelector(".reset");
pTurnText.innerHTML = "player 1";
let player1 = true;
let player2 = false;

// store all win conditions
const winarray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

if (player1 == true) {
  let htmlstr = "0";
}

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (player1) {
      button.innerHTML = "0";
      pTurnText.innerHTML = "player 2";
      player1 = false;
      player2 = true;
      button.setAttribute("disabled", true);
      button.setAttribute(
        "style",
        "background-color: rgba(212, 245, 179, 0.4);"
      );
    } else {
      button.innerHTML = "X";
      pTurnText.innerHTML = "player 1";
      player1 = true;
      player2 = false;
      button.setAttribute("disabled", true);
      button.setAttribute(
        "style",
        "background-color: rgba(245, 222, 179, 0.5);"
      );
    }
    CheckIfWin();
  });
});

resetBtn.addEventListener("click", () => {
  allButtons.forEach((button) => {
    button.disabled = false;
    button.setAttribute("style", "background-color:  #BEC5AD;");
    button.innerHTML = " ";
    player1 = true;
    player2 = false;
  });
});

function CheckIfWin() {
  winarray.forEach((pattern) => {
    let p0val = allButtons[pattern[0]].innerText;
    let p1val = allButtons[pattern[1]].innerText;
    let p2val = allButtons[pattern[2]].innerText;
    if (p0val != "" && p1val != "" && p2val != "") {
      let checkpattern = (p0val == p1val && p1val == p2val);
      if (checkpattern) {
        if (player1 == false) {
          pTurnText.innerHTML = "player 1 wins";
          
        } else {
          pTurnText.innerHTML = "player 2 wins";
          
        }
      }
    }
  });
}


