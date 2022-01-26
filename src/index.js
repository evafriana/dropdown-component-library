import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./lib/Dropdown";

// const myFn = (e) => console.log(e);
// const myData = [
//   { value: 1, text: 1, name: 1 },
//   { value: 2, text: 2, name: 2 },
//   { value: 3, text: 3, name: 3 },
// ];

//  ReactDOM.render(
//   <Dropdown onChange={myFn} options={myData} label="Address" option="All" />,
//   document.getElementById("root")
// );

const myData = ["gajah", "burung", "buaya"];
ReactDOM.render(<Dropdown options={myData} />, document.getElementById("root"));
