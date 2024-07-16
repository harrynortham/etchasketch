const container = document.getElementById("container");
const generateButton = document.getElementById("generate-grid");
let squares;

function squareHover(square) {
  console.log(square);
  square.style.backgroundColor = "black";
}

function generateGrid(squares) {
  console.log(squares);
  let totalSquares = squares * squares;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    //add event listener for when square is hovered and callback to hover function
    square.addEventListener("mouseover", () => {
      squareHover(square);
    });
  }
}

generateButton.addEventListener("click", () => {
  squares = prompt("How many squares to show?", "");
  squares = parseInt(squares);
  if (Number.isInteger(squares)) {
    if (squares < 16 || squares > 100) {
      alert("Must be a number between 16 and 100");
    } else {
      generateGrid(squares);
    }
  } else {
    alert("Must be a number");
  }
});
