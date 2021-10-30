import React from "react";

import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

import "./buttons.styles.css";

const Buttons = ({ rightClickHandler, leftClickHandler }) => (
  <div>
    <button className="btn btn-left" onClick={leftClickHandler}>
      <BiChevronLeft className="chevron " />
    </button>
    <button className="btn btn-right" onClick={rightClickHandler}>
      <BiChevronRight className="chevron " />
    </button>
  </div>
);

export default Buttons;
