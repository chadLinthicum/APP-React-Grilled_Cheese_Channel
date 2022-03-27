import React from "react";
import "../styles/game.css";
import Board from "./Board";
import Card from "./Card";

const Game = () => {
  return (
    <div className="game">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>
      </main>
    </div>
  );
};

export default Game;
