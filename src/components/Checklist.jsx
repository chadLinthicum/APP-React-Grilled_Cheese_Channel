import React, { useState } from "react";
import uuid from "react-uuid";
import "../styles/checklist.css";
import remote from "../assets/remote.gif";

const Checklist = () => {
  const allItems = [
    { name: "Non-Stick Pan", checked: false },
    { name: "Spatula", checked: false },
    { name: "2 Slices of Bread", checked: false },
    { name: "Butter", checked: false },
    { name: "1 Slice of Cheese", checked: false },
  ];

  // const overwritten = allItems.map((item) => {
  //   return { ...item, checked: true };
  // });

  // console.log(overwritten);

  const [item] = useState(allItems);

  return (
    <div className="checklist">
      <div>
        <br />
        <h2>
          👨‍🍳 Do you have everything you <i>remotely</i> need to create your
          melted masterpiece!? 👩‍🍳
        </h2>
        <h3>Check each item below :</h3>
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
            {item.map((theItem) => {
              return (
                <tr key={uuid()}>
                  <td>
                    <input
                      className="checkboxes"
                      type="checkbox"
                      defaultChecked={theItem.checked}
                      onChange={() => !theItem.checked}
                    />
                  </td>
                  <td>{theItem.name}</td>
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
        <br />
        <br />
        <img src={remote} alt="" className="remote" />
      </form>
    </div>
  );
};

export default Checklist;
