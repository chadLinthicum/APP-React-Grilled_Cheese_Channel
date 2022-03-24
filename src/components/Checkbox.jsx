import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
};

export default Checkbox;
