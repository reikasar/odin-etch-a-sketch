const flexContainer = document.querySelector(".flex-container");
const modeDisplay = document.querySelector(".active-mode");
const sketchBoard = document.querySelector(".sketch-board");
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input");
const boardError = document.querySelector(".create-board-error").value;
const setSizeBtn = document.querySelector(".set-size");

//console.log(input);

let size;

function setSize() {
  setSizeBtn.addEventListener("click", () => {
    let size = document.querySelector(".input").value;
    console.log(size)
    return size;
  });
}

function createBoard(size) {
  const sketchBoard = document.querySelector(".sketch-board");
  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "blue";
    square.classList.add("square");
    sketchBoard.appendChild(square);
  }
}
