import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./lib/Dropdown";

const myData = ["Paris", "Nantes", "Toulouse"];
ReactDOM.render(React.createElement(Dropdown, { options: myData }), document.getElementById("root"));
export { Dropdown };