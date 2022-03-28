import React from "react";

function Picture({ id, image }) {
  return <img id={id} className="game-pics" src={image} alt="game" />;
}

export default Picture;
