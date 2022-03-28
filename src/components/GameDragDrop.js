import React from "react";
import GamePicture from "./GamePicture";
// import { SlideshowData } from "./SlideshowData";
import { GameData } from "./GameData";
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
    const pictureList = GameData.filter((myThis) => id === myThis.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  // //Attempted to implement array shuffle for drag elements.
  // useEffect(() => {
  //   console.log(rando());
  // });

  // const rando = () => {
  //   SlideshowData.sort(function () {
  //     return 0.5 - Math.random();
  //   });
  // };

  return (
    <>
      <div className="pictures">
        {GameData.map((myThis) => {
          return <GamePicture image={myThis.image} id={myThis.id} />;
        })}
      </div>

      <div className="board" ref={drop}>
        {board.map((myThis) => {
          return <GamePicture image={myThis.image} id={myThis.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
