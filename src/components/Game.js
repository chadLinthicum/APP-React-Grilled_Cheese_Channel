import React from "react";
import ReactDOM from "react-dom";
import "../styles/game.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GameDragDrop from "./GameDragDrop";
import { useState } from "react";

const Game = () => {
  // let h1 = React.createElement("h1", { id: "heading" }, "Test");
  const [correct, setCorrect] = useState({ display: "none" });

  const showImage = () => {
    setCorrect({ display: "inline-block" });
  };

  return (
    <div className="Game">
      <div>
        <h2>👨‍🍳 Can you remember the proper order of steps? 👩‍🍳</h2>
        <h3>Drag the icons into the drop and then check your answer : </h3>
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

      <div className="answer" style={correct}>
        Test
      </div>
    </div>
    //DndProvider - Highest order component. Everything inside now has access to the functionality. Must pass a backend property into it the provider.
  );
};

export default Game;
