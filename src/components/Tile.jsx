import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Tile.css";
import checkForWinner from "../checkForWinner";
import setBoard from "../setBoard";
function Tile({ index, setBoard, setWinner }) {
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  const board = useSelector((state) => state?.board);
  const size = useSelector((state) => state?.size);
  const noOfTurns = useSelector((state) => state?.noOfTurns);

  //handleclick
  const handleClick = (index) => {
    let symbol = "";
    let r = index.substring(0, 1);
    let c = index.substring(1, 2);
    dispatch({ type: "INCREAMENT" });
    if (noOfTurns % 2 === 0) {
      board[r][c] = "O";
      symbol = "O";
      setImg("/images/circle.png");
    } else {
      board[r][c] = "X";
      symbol = "X";
      setImg("/images/cross.png");
    }

    dispatch({ type: "SET_BOARD", board: board });
    setBoard(board);
    if (noOfTurns > (size - 1) * 2) {
      if (checkForWinner(board, index, symbol)) {
        setWinner(symbol);
        dispatch({ type: "SET_WINNER", winner: symbol });
      }
    }
  };
  return (
    <div className="tile-container" onClick={() => handleClick(index)}>
      {img && <img src={img} alt="" />}
    </div>
  );
}

export default Tile;
