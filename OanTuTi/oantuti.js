var rockPlayer = document.querySelector(".rock img");
var scissorsAI = document.querySelector(".scissors-AI");
var rockAI = document.querySelector(".rock-AI");
var paperAI = document.querySelector(".paper-AI");
var listAI = ["scissorsAI", "rockAI", "paperAI"];
// class OanTuTi {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }
// }
// var paper = new OanTuTi("Paper", 1);
// var rock = new OanTuTi("Rock", 2);
// var scissor = new OanTuTi("Scissor", 3);

function play(a) {
  var randomAI = Math.floor(Math.random() * 3);
  var result = listAI[randomAI];

  if (result == "paperAI") {
    paperAI.classList.remove("hide");
    paperAI.classList.add("show");
  } else if (result == "rockAI") {
    rockAI.classList.remove("hide");
    rockAI.classList.add("show");
  } else if (result == "scissorsAI") {
    scissorsAI.classList.remove("hide");
    scissorsAI.classList.add("show");
  }

  if (a == randomAI) {
    setTimeout(function () {
      alert("DRAW");
      continuePlay();
    }, 400);
  } else if (
    (a == 0 && randomAI == 2) ||
    (a == 1 && randomAI == 0) ||
    (a == 2 && randomAI == 1)
  ) {
    setTimeout(function () {
      alert("YOU WIN");
      continuePlay();
    }, 400);
  } else {
    setTimeout(function () {
      alert("YOU LOSE");
      continuePlay();
    }, 400);
  }
}

function continuePlay() {
  paperAI.classList.remove("show");
  paperAI.classList.add("hide");
  rockAI.classList.remove("show");
  rockAI.classList.add("hide");
  scissorsAI.classList.remove("show");
  scissorsAI.classList.add("hide");
}
var title = document.querySelector("h1");
setInterval(() => {
  title.classList.toggle("red");
}, 1000);
