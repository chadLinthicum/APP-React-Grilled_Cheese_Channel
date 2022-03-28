import React from "react";
import GamePicture from "./GamePicture";
import { SlideshowData } from "./SlideshowData";
import { useState } from "react";
import { useDrop } from "react-dnd";

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = SlideshowData.filter((myThis) => id === myThis.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {SlideshowData.map((myThis) => {
          return <GamePicture image={myThis.image} id={myThis.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((myThis) => {
          return <GamePicture image={myThis.image} id={myThis.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
