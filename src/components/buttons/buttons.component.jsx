import React from "react";

import {
  ButtonLeft,
  ButtonRight,
  ChevronLeft,
  ChevronRight,
} from "./button.styles";

const Buttons = ({ rightClickHandler, leftClickHandler }) => (
  <>
    <ButtonLeft onClick={leftClickHandler}>
      <ChevronLeft />
    </ButtonLeft>
    <ButtonRight onClick={rightClickHandler}>
      <ChevronRight />
    </ButtonRight>
  </>
);

export default Buttons;
