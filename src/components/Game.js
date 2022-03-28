import React from "react";
import "../styles/game.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GameDragDrop from "./GameDragDrop";
import { useState } from "react";
import gameAnswer from "../assets/gameAnswer.PNG";

const Game = () => {
  const [display, setDisplay] = useState({ display: "none" });
  const showImage = () => {
    setDisplay({ display: "inline-block" });
  };

  return (
    <div className="game">
      <div>
        <h2>
          👨‍🍳 Can you <i>rerun</i> through the steps from memory? 👩‍🍳
        </h2>
        <h3>Drag the icons into the drop area and then check your answer : </h3>
        <DndProvider backend={HTML5Backend}>
          <GameDragDrop />
        </DndProvider>
      </div>
      <div>
        <br />
        <button type="button" onClick={showImage}>
          Show Answer
        </button>
      </div>
      <br />
      <div className="answer-container" style={display}>
        <img src={gameAnswer} alt="" className="answer-image" />
      </div>
    </div>
    //DndProvider - Highest order component. Everything inside now has access to the functionality. Must pass a backend property into it the provider.
  );
};

export default Game;
