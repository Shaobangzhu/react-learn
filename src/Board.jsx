import { useState } from "react";
import Square from "./Square";

function getNextPlayer(squares) {
  const filledSquares = squares.filter(
    (item) => item === "X" || item === "O"
  );
  const filledNumber = filledSquares.length;
  const nextPlayer = filledNumber % 2 === 0 ? "X" : "O";
  return nextPlayer;
}

function calculateWinner(squares) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const [a, b, c] = winCondition;
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  const filledSquares = squares.filter(
    (item) => item === "X" || item === "O"
  );
  if (filledSquares.length === 9) {
    return "Nobody";
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // 下一个即将展现的字母
  const nextPlayer = getNextPlayer(squares);
  // 是否已经存在胜利者
  const winner = calculateWinner(squares);
  // 根据情况展示状态文字
  let status = winner ? `${winner} is winner` : `Next player: ${nextPlayer}`;

  // 处理点击的函数
  const clickHandler = (index) => {
    const currentSquare = squares[index];

    if (currentSquare === null && !winner) {
      const newSquares = squares.slice();
      newSquares[index] = nextPlayer;
      setSquares(newSquares);
    }
  };

  // 负责页面渲染的JSX语法
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} index={0} onClick={clickHandler} />
        <Square value={squares[1]} index={1} onClick={clickHandler} />
        <Square value={squares[2]} index={2} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} onClick={clickHandler} />
        <Square value={squares[4]} index={4} onClick={clickHandler} />
        <Square value={squares[5]} index={5} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} onClick={clickHandler} />
        <Square value={squares[7]} index={7} onClick={clickHandler} />
        <Square value={squares[8]} index={8} onClick={clickHandler} />
      </div>
    </>
  );
}

export default Board;