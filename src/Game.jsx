import { useState } from "react";

import Board from "./Board";
import History from "./History";

// 通过区块内容判断谁是赢家
function calculateWinner(squares) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const [a, b, c] = winCondition;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  const filledSquares = squares.filter((item) => item === "X" || item === "O");
  if (filledSquares.length === 9) {
    return "Nobody";
  }
  return null;
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // 是否已经存在胜利者
  const winner = calculateWinner(squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} winner={winner} setSquares={setSquares} />
      </div>
      <div className="game-history">
        {winner ? <History /> : null}
      </div>
    </div>
  );
}

export default Game;