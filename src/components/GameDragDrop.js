import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import GamePicture from "./GamePicture";
import { GameData } from "./GameData";

//This file contains the drag functionality and drop functionality. We are rendering the game app in this file.

//Every single object or element you want to make draggable needs a different implementation of the useDrag hook. You have to use the hook every single time. You can separate the logic and create a separate component that contains the hook and logic for dragging and mapping through a list.

const DragDrop = () => {
  const [board, setBoard] = useState([]); //This will be the state representing the images in our drop board. The dropped images will get added to the list.

  const [{ isOver }, dropBoard] = useDrop(() => ({
    //dropBoard is the reference object that will be passed to our drop board.
    accept: "image",
    drop: (item) => addImageToBoard(item.id), //Function gets called whenever you drop the item. addImageToBoard will add our image to our board list.
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    //The id being passed is the identifier of the item being added to our list.
    const pictureList = GameData.filter((myThis) => id === myThis.id);
    //Filters the GameData to only include the picture with the id equal to the id in the function.
    setBoard((board) => [...board, pictureList[0]]);
    //Grabs the first element in pictureList variable list.
    //To only allow one drop, replace with setBoard([pictureList[0]]);
  };

  return (
    <>
      <div className="pictures">
        {GameData.map((myThis) => {
          return <GamePicture id={myThis.id} image={myThis.image} />;
        })}
      </div>

      <div className="board" ref={dropBoard}>
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
