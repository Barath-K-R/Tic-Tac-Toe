import React, { useEffect, useState } from "react";
import initialiseBoard from "../setBoard";
import Tile from "./Tile.jsx";
import "../css/Board.css";
import { useDispatch, useSelector } from "react-redux";

const Board = ({ size }) => {
  const [board, setBoard] = useState([]);
  const [winner, setWinner] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const boardarray = initialiseBoard(size);
    dispatch({ type: "SET_BOARD", board: boardarray });
    setBoard(boardarray);
  }, [size]);

  return (
    <div
      className="board-container"
      style={{
        gridTemplateColumns: `repeat(${size}, 120px)`,
        gridColumnGap: "-400px",
      }}
    >
      {
      board.map((row, rowIndex) => {
          return row.map((value, colIndex) => (
            <Tile
              key={rowIndex + "" + colIndex}
              index={rowIndex + "" + colIndex}
              setBoard={setBoard}
              setWinner={setWinner}
            />
          ));
        })}
    </div>
  );
};

export default Board;
