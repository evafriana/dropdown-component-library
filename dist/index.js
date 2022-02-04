import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./lib/Dropdown";
const myData = ["Paris", "Nantes", "Toulouse"];
ReactDOM.render( /*#__PURE__*/React.createElement(Dropdown, {
  options: myData
}), document.getElementById("root"));
export { Dropdown };