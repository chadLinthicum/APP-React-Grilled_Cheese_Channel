import React, { useState } from "react";

const Checklist = () => {
  const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheck}
        />
      </div>
    );
  };

  return (
    <div className="checklist">
      <div>
        <h2>
          👨‍🍳 Do you have everything you need to be a top sandwich chef? 👩‍🍳
        </h2>
        <h3>Check each supply box below:</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Y/N</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>Pan</td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>Spatula</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="reset">Uncheck all</button>
    </div>
  );
};

export default Checklist;
