import React from "react";
import GamePicture from "./GamePicture";
import { SlideshowData } from "./SlideshowData";

const DragDrop = () => {
  return (
    <>
      <div className="Pictures">
        {SlideshowData.map((myThis) => {
          return <GamePicture image={myThis.image} id={myThis.id} />;
        })}
      </div>
      <div className="Board">Board</div>
    </>
  );
};

export default DragDrop;
