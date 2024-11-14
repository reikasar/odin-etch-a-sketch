const flexContainer = document.querySelector(".flex-container");
const modeDisplay = document.querySelector(".active-mode");
const sketchBoard = document.querySelector(".sketch-board");
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const input = +document.querySelector(".input").value;
const setSizeBtn = document.querySelector(".set-size");

let color = "black";
let click = true;

function createBoard(size) {
  const sketchBoard = document.querySelector(".sketch-board");
  let squares = sketchBoard.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseenter", colorSquare);
    square.style.backgroundColor = "white";
    square.classList.add("square");
    sketchBoard.appendChild(square);
  }
}

function changeSize(input) {
  if (2 <= input && input <= 100) {
  createBoard(input);
  }
  else alert("Input has to be between 2 and 100!")
};

setSizeBtn.addEventListener("click", changeSize(input));


function colorSquare() {
  if (click) {
  this.style.backgroundColor = color;
}};

function changeColor(choice) {
  color = choice;
  return color;
}

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color = `rgb(${red}, ${green}, ${blue})`; 
  return color;
};

black.addEventListener("click", () => {
  color = "black";
});

random.addEventListener("click", changeColor(randomColor));

eraser.addEventListener("click", () => {
  color = "white";
});

function removeBoard() {
  const sketchBoard = document.querySelector(".sketch-board");
  let squares = sketchBoard.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = "white");
}

reset.addEventListener("click", removeBoard);

sketchBoard.addEventListener("click", () => {
  click = !click;
  if(click) {
    modeDisplay.textContent = "Drawing mode is Active!";
  }
  else 
    modeDisplay.textContent = "Click for activating drawing mode!"
});