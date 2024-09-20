const GameController = require("./gameController.js");

function ScreenController() {
  const ROWS = 10;
  const GRID_HEIGHT_PX = 500;
  const $board1 = document.querySelector(".board-1 .board");
  const $board2 = document.querySelector(".board-2 .board");
  const $board1Name = document.querySelector(".board-1 .name");
  const $board2Name = document.querySelector(".board-2 .name");
  const $board1Ships = document.querySelector(".board-1 .ships");
  const $board2Ships = document.querySelector(".board-2 .ships");
  const $gameMessage = document.querySelector(".game-message");
  const $shuffle = document.querySelector(".shuffle");

  const gc = new GameController();
  gc.initDefaults();
  render();

  function render() {
    let sides = [
      {
        player: gc.player1,
        boardContainer: $board1,
        nameContainer: $board1Name,
        shipsContainer: $board1Ships,
      },
      {
        player: gc.player2,
        boardContainer: $board2,
        nameContainer: $board2Name,
        shipsContainer: $board2Ships,
      },
    ];

    sides.forEach((side) => {
      side.boardContainer.textContent = "";
      updateGridDimens({
        boardContainer: side.boardContainer,
      });
      displayPlayerName({
        name: side.player.name,
        boardNameContainer: side.nameContainer,
      });
      displayShips({
        ships: side.player.gameboard.ships,
        shipsContainer: side.shipsContainer,
      });
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

    $shuffle.addEventListener("click", handleShuffle);

    displayGameMessage({ messageContainer: $gameMessage });
  }

  function handleShuffle(event) {
    gc.initDefaults();
    render();
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

        div.classList.add(...getOpponentCellClassList(board[y][x]));
        div.addEventListener("click", handleHit /*{ once: true }*/);
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
    for (let y = 0; y < numRows; ++y) {
      for (let x = 0; x < numRows; ++x) {
        let div = document.createElement("div");
        div.style.height = `${gridHeightPx / numRows}px`;
        div.style.width = `${gridHeightPx / numRows}px`;

        div.classList.add(...getOwnCellClassList(board[y][x]));
        boardContainer.appendChild(div);
      }
    }
  }

  function displayPlayerName({ name, boardNameContainer }) {
    boardNameContainer.textContent = name;
  }

  function displayShips({ ships, shipsContainer }) {
    shipsContainer.textContent = "";
    ships.forEach((ship) => {
      shipsContainer.appendChild(createShip(ship));
    });
  }

  function displayGameMessage({ messageContainer }) {
    messageContainer.textContent = "";
    if (gc.isGameOver()) {
      messageContainer.textContent = `Game Over. ${gc.getWinner().name} won!`;
    }
  }

  function createShip(ship) {
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("ship-container");
    for (let i = 0; i < ship.length; ++i) {
      const shipCell = document.createElement("div");
      shipCell.classList.add("ship-cell");
      if (ship.isSunk()) shipCell.classList.add("sunk");
      shipDiv.appendChild(shipCell);
    }
    return shipDiv;
  }

  function getOwnCellClassList(cellValue) {
    switch (cellValue) {
      case "E":
        return ["cell", "empty"];
      case "M":
        return ["cell", "miss"];
      default:
        if (cellValue < 0) return ["cell", "hit", "ship"];
        return ["cell", "ship"];
    }
  }

  function getOpponentCellClassList(cellValue) {
    switch (cellValue) {
      case "E":
        return ["cell", "empty", "clickable"];
      case "M":
        return ["cell", "miss"];
      default:
        if (cellValue < 0) return ["cell", "hit"];
        return ["cell", "clickable"];
    }
  }

  function handleHit(event) {
    if (gc.isGameOver()) return;
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
