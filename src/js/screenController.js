const GameController = require("./gameController.js");

function ScreenController() {
  const ROWS = 10;
  const GRID_HEIGHT_PX = 600;
  const $board1 = document.querySelector(".board-1 .board");
  const $board2 = document.querySelector(".board-2 .board");
  const $board1Name = document.querySelector(".board-1 .name");
  const $board2Name = document.querySelector(".board-2 .name");

  const gc = new GameController();
  gc.initDefaults();
  render();

  function render() {
    [$board1, $board2].forEach((boardContainer) => {
      boardContainer.textContent = "";
      updateGridDimens({
        boardContainer: boardContainer,
      });
    });

    displayPlayerName({
      name: gc.player1.name,
      boardNameContainer: $board1Name,
    });

    displayPlayerName({
      name: gc.player2.name,
      boardNameContainer: $board2Name,
    });

    displayOwnBoard({
      board: gc.player1Board,
      boardContainer: $board1,
      numRows: gc.player1Board.length,
    });

    displayOpponentBoard({
      board: gc.player2Board,
      boardContainer: $board2,
      numRows: gc.player2Board.length,
    });
  }

  function updateGridDimens({ boardContainer, height = GRID_HEIGHT_PX } = {}) {
    boardContainer.style.height = `${height}px`;
    boardContainer.style.width = `${height}px`;
  }

  function displayOpponentBoard({
    board,
    boardContainer,
    gridHeightPx = GRID_HEIGHT_PX,
    numRows = ROWS,
  }) {
    for (let y = 0; y < numRows; ++y) {
      for (let x = 0; x < numRows; ++x) {
        let div = document.createElement("div");
        div.style.height = `${gridHeightPx / numRows}px`;
        div.style.width = `${gridHeightPx / numRows}px`;
        div.dataset.y = y;
        div.dataset.x = x;

        div.classList.add(...getOpponentClassList(board[y][x]));
        div.addEventListener("click", handleHit, { once: true });
        boardContainer.appendChild(div);
      }
    }
  }

  function displayOwnBoard({
    board,
    boardContainer,
    gridHeightPx = GRID_HEIGHT_PX,
    numRows = ROWS,
  } = {}) {
    console.log(board.length);
    for (let y = 0; y < numRows; ++y) {
      for (let x = 0; x < numRows; ++x) {
        let div = document.createElement("div");
        div.style.height = `${gridHeightPx / numRows}px`;
        div.style.width = `${gridHeightPx / numRows}px`;

        div.classList.add(...getOwnClassList(board[y][x]));
        boardContainer.appendChild(div);
      }
    }
  }

  function displayPlayerName({ name, boardNameContainer }) {
    boardNameContainer.textContent = name;
  }

  function getOwnClassList(boardValue) {
    switch (boardValue) {
      // case "H":
      //   return ["hit", "ship"];
      case "M":
        return ["miss"];
      case "E":
        return ["empty"];
      default:
        if (boardValue < 0) return ["hit", "ship"];
        return ["ship"];
    }
  }

  function getOpponentClassList(boardValue) {
    switch (boardValue) {
      case "E":
        return ["empty", "clickable"];
      case "M":
        return ["miss"];
      default:
        if (boardValue < 0) return ["hit"];
        return ["clickable"];
    }
  }

  function handleHit(event) {
    let el = event.target;
    let x = el.dataset.x;
    let y = el.dataset.y;

    if (gc.player2.gameboard.isHitOrMiss({ x, y })) return;

    gc.playTurn({ x, y });
    gc.playRandomTurn();
    render();
  }
}

module.exports = ScreenController;
