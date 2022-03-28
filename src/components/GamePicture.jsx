import React from "react";
import { useDrag } from "react-dnd";

function GamePicture({ id, image }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      id={id}
      className="game-pics"
      src={image}
      alt="game"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
      ref={drag}
    />
  );
}

export default GamePicture;
