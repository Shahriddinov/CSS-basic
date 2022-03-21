const images = ["img-rock.jpg", "img-paper-new.jpg", "img-sciccors.jpg"];
const sadImages = [
  "img-rock-sad.jpg",
  "img-paper-sad.jpg",
  "img-sciccors-sad.jpg",
];
const botNeeds = ["Rock", "Paper", "Sciccors"];

const resultText = [
  ["You tied", "You lost", "You won"],
  ["You won", "You tied", "You lost"],
  ["You lost", "You won", "You tied"],
];

const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const numWin = document.querySelector(".num-win");
const numDraw = document.querySelector(".num-draw");
const numFail = document.querySelector(".num-fail");
const roundResult = document.querySelector(".round-result");
const resetScore = document.querySelector(".reset-score");
const alert = document.querySelector(".alert");

//DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  defaultBox();
});
//container click
let countW = 0;
let countD = 0;
let countF = 0;

container.addEventListener("click", (e) => {
  let myvalue = e.target.innerText;
  let mychoice = parseInt(e.target.dataset.id);
  let botchoice = Math.floor(Math.random() * 3);
  const botvalue = botNeeds[botchoice];
  let textvalue = resultText[mychoice][botchoice];
  let color, resultMyImg, resultBotImg;
  switch (textvalue) {
    case "You won":
      color = "green";
      countW++;
      numWin.innerHTML = countW;
      resultMyImg = images[mychoice];
      resultBotImg = sadImages[botchoice];
      break;
    case "You tied":
      color = "yellow";
      countD++;
      numDraw.innerHTML = countD;
      resultMyImg = images[mychoice];
      resultBotImg = images[botchoice];
      break;
    case "You lost":
      color = "red";
      countF++;
      numFail.innerHTML = countF;
      resultMyImg = sadImages[mychoice];
      resultBotImg = images[botchoice];
  }
  resetScore.addEventListener("click", () => {
    countW = 0;
    countD = 0;
    countF = 0;
    numWin.innerHTML = countW;
    numDraw.innerHTML = countD;
    numFail.innerHTML = countF;
    let totalScore = countW + countD + countF;
    roundResult.innerHTML = totalScore;
  });
  let totalScore = countW + countD + countF;
  roundResult.innerHTML = totalScore;
  setTimeout(function () {
    defaultBox();
  }, 1500);
  display(myvalue, botvalue, textvalue, color, resultMyImg, resultBotImg);
});

//functions
function display(
  myvalue,
  botvalue,
  textvalue,
  color,
  resultMyImg,
  resultBotImg
) {
  container.innerHTML = `
									<div class="result" style="box-shadow: 0 0 20px rgba(50,100,200,.9);background: url('images/${resultMyImg}');">${myvalue}</div>
									<div class="text" style="color: ${color};">${textvalue}</div>
									<div class="result" style="box-shadow: 0 0 20px rgba(200,100,50,.9);background: url('images/${resultBotImg}');">${botvalue}</div>`;
}
function defaultBox() {
  container.innerHTML = `
									<div class="item" data-id="0" style="background: url('images/${images[0]}');">Rock</div>
									<div class="item" data-id="1" style="background: url('images/${images[1]}');">Paper</div>
									<div class="item" data-id="2" style="background: url('images/${images[2]}');">Sciccors</div>`;
}
