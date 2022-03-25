import React, { useState } from "react";

const Checklist = () => {
  const allItems = [
    { name: "Pan", checked: false },
    { name: "Spatula", checked: false },
    { name: "Bread", checked: false },
    { name: "Butter", checked: false },
    { name: "Cheese", checked: false },
  ];

  // const overwritten = allItems.map((item) => {
  //   return { ...item, checked: true };
  // });

  // console.log(overwritten);

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
      <form>
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
                    />
                  </td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        <button type="reset" id="checkbox-clear-btn">
          Clear All
        </button>
      </form>
    </div>
  );
};

export default Checklist;
