import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);

  function reset() {
    setPlayer("X");

    setBoard(
      board.map((val, idx) => {
        return "";
      })
    );

    setCount(0);
  }

  function checkValue(a, b, c) {
    const val1 = board[a];
    const val2 = board[b];
    const val3 = board[c];

    if (val1 === "" || val2 === "" || val3 === "") {
      return false;
    }

    if (val1 === val2 && val2 === val3) {
      return true;
    }

    return false;
  }

  function checkWinner() {
    if (
      checkValue(0, 1, 2) ||
      checkValue(3, 4, 5) ||
      checkValue(6, 7, 8) ||
      checkValue(0, 3, 6) ||
      checkValue(1, 4, 7) ||
      checkValue(2, 5, 8) ||
      checkValue(0, 4, 8) ||
      checkValue(2, 4, 6)
    ) {
      const winner = player;

      reset();

      alert(`player ${winner} is winner`);

      return true;
    }
  }

  function setBoxValue(index) {
    if (board[index] === "") {
      board[index] = player;

      setBoard(
        board.map((val, idx) => {
          if (idx === index) {
            return player;
          }

          return val;
        })
      );

      if (checkWinner()) {
        return;
      }

      if (player === "X") {
        setPlayer("0");
      } else if (player === "0") {
        setPlayer("X");
      }

      setCount(count + 1);
    }
  }

  useEffect(() => {
      console.log(count);
    if (count === 9) {
      alert("this is tie");
      reset();
    }
  });

  return (
    <>
      <div className="main_div">
        <div className="board_box">
          <div
            className="box"
            onClick={() => {
              setBoxValue(0);
            }}
          >
            {board[0]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(1);
            }}
          >
            {board[1]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(2);
            }}
          >
            {board[2]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(3);
            }}
          >
            {board[3]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(4);
            }}
          >
            {board[4]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(5);
            }}
          >
            {board[5]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(6);
            }}
          >
            {board[6]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(7);
            }}
          >
            {board[7]}
          </div>
          <div
            className="box"
            onClick={() => {
              setBoxValue(8);
            }}
          >
            {board[8]}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
