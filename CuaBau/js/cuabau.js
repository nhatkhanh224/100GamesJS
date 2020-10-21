class Animal {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }
}

var deer = new Animal("Deer", 0);
var deerDOM = document.querySelector(".deer");

var holo = new Animal("Hồ lô", 0);
var holoDOM = document.querySelector(".holo");

var chicken = new Animal("Chicken", 0);
var chickenDOM = document.querySelector(".chicken");

var fish = new Animal("Fish", 0);
var fishDOM = document.querySelector(".fish");

var crab = new Animal("Crab", 0);
var crabDOM = document.querySelector(".crab");

var lobster = new Animal("Lobster", 0);
var lobsterDOM = document.querySelector(".lobster");

var numberDeer = document.querySelector(".number-deer");
var numberHolo = document.querySelector(".number-holo");
var numberChicken = document.querySelector(".number-chicken");
var numberFish = document.querySelector(".number-fish");
var numberCrab = document.querySelector(".number-crab");
var numberLobster = document.querySelector(".number-lobster");

var numberDeerBet = document.querySelector(".number-deer-bet");
var numberHoloBet = document.querySelector(".number-holo-bet");
var numberChickenBet = document.querySelector(".number-chicken-bet");
var numberFishBet = document.querySelector(".number-fish-bet");
var numberCrabBet = document.querySelector(".number-crab-bet");
var numberLobsterBet = document.querySelector(".number-lobster-bet");

var moneyBet = [];
var animalRandom = [
  deer.name,
  holo.name,
  chicken.name,
  fish.name,
  crab.name,
  lobster.name,
];

var myMoney = 10000000;

var currentMoney = document.getElementById("currentMoney");
currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
function getMoney(money) {
  moneyBet.push(money);
}
function putMoney(name) {
  var key = name;
  var last = moneyBet[moneyBet.length - 1];
  switch (key) {
    case crab:
      var moneyCrabResult = 0;
      myMoney = myMoney - last;
      crab.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberCrabBet.classList.remove("hide");
      numberCrabBet.innerText = numberWithCommas(crab.money) + "đ";
      break;
    case lobster:
      myMoney = myMoney - last;
      lobster.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberLobsterBet.classList.remove("hide");
      numberLobsterBet.innerText = numberWithCommas(lobster.money) + "đ";
      break;
    case holo:
      myMoney = myMoney - last;
      holo.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberHoloBet.classList.remove("hide");
      numberHoloBet.innerText = numberWithCommas(holo.money) + "đ";
      break;
    case deer:
      myMoney = myMoney - last;
      deer.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberDeerBet.classList.remove("hide");
      numberDeerBet.innerText = numberWithCommas(deer.money) + "đ";
      break;
    case chicken:
      myMoney = myMoney - last;
      chicken.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberChickenBet.classList.remove("hide");
      numberChickenBet.innerText = numberWithCommas(chicken.money) + "đ";
      break;
    case fish:
      myMoney = myMoney - last;
      fish.money += last;
      currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      numberFishBet.classList.remove("hide");
      numberFishBet.innerText = numberWithCommas(fish.money) + "đ";
      break;

    default:
      break;
  }
}

function spin() {
  var dice1 = Math.floor(Math.random() * 6);
  var dice2 = Math.floor(Math.random() * 6);
  var dice3 = Math.floor(Math.random() * 6);
  console.log(dice1, dice2, dice3);
  //Xu li number hien len tren animal sau khi spin
  var numberOfDeer = 0,
    numberOfHoLo = 0,
    numberOfChicken = 0,
    numberOfFish = 0,
    numberOfCrab = 0,
    numberOfLobster = 0;

  function HandleAnimal(x) {
    if (x == 0) {
      deerDOM.classList.remove("hide");
      deerDOM.classList.add("show");

      myMoney += deer.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    } else if (x == 1) {
      holoDOM.classList.remove("hide");
      holoDOM.classList.add("show");

      myMoney += holo.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    } else if (x == 2) {
      chickenDOM.classList.remove("hide");
      chickenDOM.classList.add("show");

      myMoney += chicken.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    } else if (x == 3) {
      fishDOM.classList.remove("hide");
      fishDOM.classList.add("show");

      myMoney += fish.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    } else if (x == 4) {
      crabDOM.classList.remove("hide");
      crabDOM.classList.add("show");

      myMoney += crab.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    } else if (x == 5) {
      lobsterDOM.classList.remove("hide");
      lobsterDOM.classList.add("show");

      myMoney += lobster.money;
      setTimeout(function () {
        currentMoney.innerText = "My money: " + numberWithCommas(myMoney) + "đ";
      }, 2000);
    }
  }
  function HandleResult() {
    if (dice1 == 0 && dice2 == 0 && dice3 == 0) {
      numberOfDeer += 3;
      deer.money += deer.money * numberOfDeer;
      numberDeer.innerText = numberOfDeer;
      HandleAnimal(0);
    } else if (
      (dice1 == 0 && dice2 == 0) ||
      (dice2 == 0 && dice3 == 0) ||
      (dice1 == 0 && dice3 == 0)
    ) {
      numberOfDeer += 2;
      deer.money += deer.money * numberOfDeer;
      numberDeer.innerText = numberOfDeer;
      HandleAnimal(0);
    } else if (dice3 == 0 || dice1 == 0 || dice2 == 0) {
      numberOfDeer += 1;
      deer.money += deer.money * numberOfDeer;
      numberDeer.innerText = numberOfDeer;
      HandleAnimal(0);
    }

    if (dice1 == 1 && dice2 == 1 && dice3 == 1) {
      numberOfHoLo += 3;
      holo.money += holo.money * numberOfHoLo;
      numberHolo.innerText = numberOfHoLo;
      HandleAnimal(1);
    } else if (
      (dice1 == 1 && dice2 == 1) ||
      (dice2 == 1 && dice3 == 1) ||
      (dice1 == 1 && dice3 == 1)
    ) {
      numberOfHoLo += 2;
      holo.money += holo.money * numberOfHoLo;
      numberHolo.innerText = numberOfHoLo;
      HandleAnimal(1);
    } else if (dice3 == 1 || dice1 == 1 || dice2 == 1) {
      numberOfHoLo += 1;
      holo.money += holo.money * numberOfHoLo;
      numberHolo.innerText = numberOfHoLo;
      HandleAnimal(1);
    }

    if (dice1 == 2 && dice2 == 2 && dice3 == 2) {
      numberOfChicken += 3;
      chicken.money += chicken.money * numberOfChicken;
      numberChicken.innerText = numberOfChicken;
      HandleAnimal(2);
    } else if (
      (dice1 == 2 && dice2 == 2) ||
      (dice2 == 2 && dice3 == 2) ||
      (dice1 == 2 && dice3 == 2)
    ) {
      numberOfChicken += 2;
      chicken.money += chicken.money * numberOfChicken;
      numberChicken.innerText = numberOfChicken;
      HandleAnimal(2);
    } else if (dice3 == 2 || dice1 == 2 || dice2 == 2) {
      numberOfChicken += 1;
      chicken.money += chicken.money * numberOfChicken;
      numberChicken.innerText = numberOfChicken;
      HandleAnimal(2);
    }

    if (dice1 == 3 && dice2 == 3 && dice3 == 3) {
      numberOfFish += 3;
      fish.money += fish.money * numberOfFish;
      numberFish.innerText = numberOfFish;
      HandleAnimal(3);
    } else if (
      (dice1 == 3 && dice2 == 3) ||
      (dice2 == 3 && dice3 == 3) ||
      (dice1 == 3 && dice3 == 3)
    ) {
      numberOfFish += 2;
      fish.money += fish.money * numberOfFish;
      numberFish.innerText = numberOfFish;
      HandleAnimal(3);
    } else if (dice3 == 3 || dice1 == 3 || dice2 == 3) {
      numberOfFish += 1;
      fish.money += fish.money * numberOfFish;
      numberFish.innerText = numberOfFish;
      HandleAnimal(3);
    }

    if (dice1 == 4 && dice2 == 4 && dice3 == 4) {
      numberOfCrab += 3;
      crab.money += crab.money * numberOfCrab;
      numberCrab.innerText = numberOfCrab;
      HandleAnimal(4);
    } else if (
      (dice1 == 4 && dice2 == 4) ||
      (dice2 == 4 && dice3 == 4) ||
      (dice1 == 4 && dice3 == 4)
    ) {
      numberOfCrab += 2;
      crab.money += crab.money * numberOfCrab;
      numberCrab.innerText = numberOfCrab;
      HandleAnimal(4);
    } else if (dice3 == 4 || dice1 == 4 || dice2 == 4) {
      numberOfCrab += 1;
      crab.money += crab.money * numberOfCrab;
      numberCrab.innerText = numberOfCrab;
      HandleAnimal(4);
    }

    if (dice1 == 5 && dice2 == 5 && dice3 == 5) {
      numberOfLobster += 3;
      lobster.money += lobster.money * numberOfLobster;
      numberLobster.innerText = numberOfLobster;
      HandleAnimal(5);
    } else if (
      (dice1 == 5 && dice2 == 5) ||
      (dice2 == 5 && dice3 == 5) ||
      (dice1 == 5 && dice3 == 5)
    ) {
      numberOfLobster += 2;
      lobster.money += lobster.money * numberOfLobster;
      numberLobster.innerText = numberOfLobster;
      HandleAnimal(5);
    } else if (dice3 == 5 || dice1 == 5 || dice2 == 5) {
      numberOfLobster += 1;
      lobster.money += lobster.money * numberOfLobster;
      numberLobster.innerText = numberOfLobster;
      HandleAnimal(5);
    }
  }
  HandleResult();
}

function continuePlay() {
  deerDOM.classList.remove("show");
  deerDOM.classList.add("hide");
  holoDOM.classList.remove("show");
  holoDOM.classList.add("hide");
  chickenDOM.classList.remove("show");
  chickenDOM.classList.add("hide");
  fishDOM.classList.remove("show");
  fishDOM.classList.add("hide");
  crabDOM.classList.remove("show");
  crabDOM.classList.add("hide");
  lobsterDOM.classList.remove("show");
  lobsterDOM.classList.add("hide");
  resetBet();
}
function resetBet() {
  crab.money = 0;
  deer.money = 0;
  holo.money = 0;
  chicken.money = 0;
  fish.money = 0;
  lobster.money = 0;
  numberCrabBet.innerText = crab.money;
  numberCrabBet.classList.add("hide");
  numberDeerBet.innerText = deer.money;
  numberDeerBet.classList.add("hide");
  numberLobsterBet.innerText = lobster.money;
  numberLobsterBet.classList.add("hide");
  numberHoloBet.innerText = holo.money;
  numberHoloBet.classList.add("hide");
  numberFishBet.innerText = fish.money;
  numberFishBet.classList.add("hide");
  numberChickenBet.innerText = chicken.money;
  numberChickenBet.classList.add("hide");
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}
