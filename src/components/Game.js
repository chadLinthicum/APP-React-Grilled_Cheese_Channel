import React from "react";
import "../styles/game.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GameDragDrop from "./GameDragDrop";

const Game = () => {
  return (
    <div className="Game">
      <DndProvider backend={HTML5Backend}>
        <GameDragDrop />
      </DndProvider>
    </div>
    //DndProvider - Highest order component. Everything inside now has access to the functionality. Must pass a backend property into it the provider.
  );
};

export default Game;
