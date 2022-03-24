import React, { useState } from "react";

const Checklist = () => {
  const allItems = [
    { name: "Pan", checked: false },
    { name: "Spatula", checked: false },
    { name: "Bread", checked: false },
    { name: "Butter", checked: false },
    { name: "Cheese", checked: false },
  ];

  const [items, setItems] = useState(allItems);

  return (
    <div className="checklist">
      <div>
        <br />
        <h2>
          👨‍🍳 Do you have everything you need to be a top sandwich chef? 👩‍🍳
        </h2>
        <h3>Check each item's box below:</h3>
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
            {items.map((item) => {
              return (
                <tr key={item.name}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      onChange={() => !item.checked}
                      onClick={() => console.log(item.checked)}
                    />
                  </td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <button type="submit" id="checkbox-clear-btn">
        Uncheck All
      </button>
    </div>
  );
};

export default Checklist;
