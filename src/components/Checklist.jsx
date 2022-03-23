import React, { useState } from "react";

const Checklist = () => {
  const [checked, setChecked] = useState(false);

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
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </td>
              <td>Pan</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
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
