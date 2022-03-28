import React from "react";
import Picture from "./Picture";
import { SlideshowData } from "./SlideshowData";

const DragDrop = () => {
  return (
    <>
      <div className="Pictures">
        {SlideshowData.map((myThis) => {
          return <Picture image={myThis.image} id={myThis.id} />;
        })}
      </div>
      <div className="Board">Board</div>
    </>
  );
};

export default DragDrop;
