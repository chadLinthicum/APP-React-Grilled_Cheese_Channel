import React from "react";
import { useState } from "react";
import GamePicture from "./GamePicture";
import { GameData } from "./GameData";
import { useDrop } from "react-dnd";

//This file contains the drag functionality and drop functionality. We are rendering the game app in this file.
//Every single object or element you want to make draggable needs a different implementation of the useDrag hook. You have to use the hook every single time. You can separate the logic and create a separate component that contains the hook and logic for dragging and map through a list
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
    const pictureList = GameData.filter((myThis) => id === myThis.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="pictures">
        {GameData.map((myThis) => {
          return <GamePicture id={myThis.id} image={myThis.image} />;
        })}
      </div>

      <div className="board" ref={drop}>
        {board.map((myThis) => {
          return <GamePicture id={myThis.id} image={myThis.image} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;

// 🧟‍♂️Attempted to implement array shuffle for drag elements.
// import { SlideshowData } from "./SlideshowData";
// useEffect(() => {
//   console.log(rando());
// });
// const rando = () => {
//   SlideshowData.sort(function () {
//     return 0.5 - Math.random();
//   });
// };
