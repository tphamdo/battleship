import "./styles.css";
const ScreenController = require("./js/screenController.js");

ScreenController();
/*
const ROWS = 10;
const GRID_HEIGHT_PX = 600;
const $board1 = document.querySelector(".board-1");
const $board2 = document.querySelector(".board-2");

function updateGridDimens({ boardContainer, height = GRID_HEIGHT_PX }) {
  boardContainer.style.height = `${height}px`;
  boardContainer.style.width = `${height}px`;
}

function displayOpponentBoard({
  board,
  boardContainer,
  gridHeightPx = GRID_HEIGHT_PX,
  numRows = ROWS,
}) {
  for (let i = 0; i < ROWS; ++i) {
    for (let j = 0; j < ROWS; ++j) {
      let div = document.createElement("div");
      div.style.height = `${gridHeightPx / numRows}px`;
      div.style.width = `${gridHeightPx / numRows}px`;

      div.classList.add(getBoardPointClass({ boardValue: board[i][j] }));
      boardContainer.appendChild(div);
    }
  }
}

function displayOwnBoard({
  board,
  boardContainer,
  gridHeightPx = GRID_HEIGHT_PX,
  numRows = ROWS,
}) {
  for (let i = 0; i < ROWS; ++i) {
    for (let j = 0; j < ROWS; ++j) {
      let div = document.createElement("div");
      div.style.height = `${gridHeightPx / numRows}px`;
      div.style.width = `${gridHeightPx / numRows}px`;

      if (typeof board[i][j] === "number") {
        div.classList.add("ship");
      }
      div.classList.add(getBoardPointClass({ boardValue: board[i][j] }));
      boardContainer.appendChild(div);
    }
  }
}

function getBoardPointClass({ boardValue }) {
  switch (boardValue) {
    case "H":
      return "hit";
    case "M":
      return "miss";
    default:
      return "empty";
  }
}

// initBoards();
board1 = [
  ["E", "E", "E", "E", "E", "E", 0, 0, 0, 0],
  [4, 4, "E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "1", "E", "E"],
  ["E", "E", 3, "E", "E", "E", "E", "1", "E", "E"],
  ["E", "E", 3, "E", "E", "E", "E", "1", "E", "E"],
  [5, "E", "E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", 2, 2, 2, "E", "E"],
  [6, "E", 7, "E", "E", "E", "E", "E", "E", 8],
];

board2 = [
  ["E", "E", "E", 6, "E", "E", "E", "E", 7, "E"],
  ["E", "E", "E", "E", "E", "E", "M", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
  [9, "M", 0, 0, 0, 0, "E", "E", "E", 8],
  ["E", "E", "E", "E", "E", 1, "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "H", "E", "E", "E", "E"],
  ["E", 4, "E", "E", "E", 1, 2, 2, "E", "E"],
  ["E", "H", "E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", 4, 5, 5, "E", "E", "E", "E", "E", "E"],
  ["M", 4, "M", "E", "E", "E", "E", "H", 3, "E"],
];

[$board1, $board2].forEach((boardContainer) => {
  updateGridDimens({
    boardContainer: boardContainer,
  });
});

displayOwnBoard({ board: board1, boardContainer: $board1 });
displayOpponentBoard({ board: board2, boardContainer: $board2 });
*/
