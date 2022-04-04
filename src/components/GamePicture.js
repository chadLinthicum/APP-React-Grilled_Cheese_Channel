import React from "react";
import { useDrag } from "react-dnd";

//File contains logic for element to be dragged

//isDragging is boolean valued variable which returns true if you are dragging the element. "drag" is used to reference which element you want to make draggable. Then we are setting it to useDrag hook and passing a function that returns an object that contains some data: Type identifier (required), collect property which contain a function that returns an object

function GamePicture({ id, image }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    //The collect function is optional and defines different states and props that are accessible throughout when you use the useDrag hook. This makes it possible to view the border from the styling below while dragging.
  }));

  return (
    <img
      id={id}
      className="game-pics"
      src={image}
      alt="game"
      style={{ border: isDragging ? "3px solid rgb(255, 251, 0)" : "0px" }}
      ref={drag} //Identifies the element we want to make draggable.
    />
  );
}

export default GamePicture;
