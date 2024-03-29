import React, { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Board from "./Board";
import setBoard from "../setBoard";
import "../css/TicTacToe.css";
import ResultModal from "./ResultModal";
const TicTacToe = () => {
  const [sizeOfBoard, setSizeOfBoard] = useState(1);
  const dispatch = useDispatch();
  const winner=useSelector(state=>state?.winner)

  return (
    <div className="tictactoe-container">
      <h1>TicTacToe</h1>
      {sizeOfBoard == 1 && (
        <div className="size-options">
          <select
            name="size"
            onChange={(e) => {
              dispatch({ type: "SET_SIZE", size: e.target.value });
              setSizeOfBoard(e.target.value);
            }}
          >
            <option value="2" selected>
              2
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      )}
      <Board size={sizeOfBoard} />
      {winner!='' && <ResultModal winner={winner}/>}
    </div>
  );
};

export default TicTacToe;
