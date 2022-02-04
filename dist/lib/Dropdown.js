import React, { useRef, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import propTypes from "prop-types";
import "./Dropdown.css";
/**
 *
 * @param {string[]}  options - Return the options string in array
 * @param {string} placeholder - Adding a placeholder (optional param)
 * @param {number} width() - Returns the asset's intrinsic width in CSS pixels..
 * @returns JSX Element
 */

const Dropdown = ({
  options = [],
  placeholder = "Select... ",
  width = "400px",
  onSelect = () => {}
}) => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    onSelect(selected);
  }, [selected]);
  useEffect(() => {
    /**
     * close options panel if clicked outside of the dropdown
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    } // Bind the event listener


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const selectedStyle = option => option === selected ? {
    fontWeight: "bolder"
  } : {};

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "dropdown",
    style: {
      width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-btn",
    onClick: e => setIsActive(!isActive)
  }, selected ? /*#__PURE__*/React.createElement("span", null, selected) : /*#__PURE__*/React.createElement("span", {
    className: "select-text"
  }, placeholder), /*#__PURE__*/React.createElement(FaChevronDown, {
    className: "fachevrondown"
  })), isActive && /*#__PURE__*/React.createElement("div", {
    className: "dropdown-content"
  }, options.map(option => /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      setSelected(option);
      setIsActive(false);
    },
    className: "dropdown-item",
    style: selectedStyle(option),
    key: option
  }, option))));
};

Dropdown.propTypes = {
  options: propTypes.array.isRequired,
  placeholder: propTypes.string
};
export default Dropdown;