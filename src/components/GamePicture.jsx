import React from "react";
import { useDrag } from "react-dnd";

function GamePicture({ id, image }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
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
      style={{ border: isDragging ? "3px solid rgb(255, 251, 0)" : "0px" }}
      ref={drag}
    />
  );
}

export default GamePicture;
