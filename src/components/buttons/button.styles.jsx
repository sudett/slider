import styled, { css } from "styled-components";

import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const chevron = css`
  fill: #fff;
  width: 3rem;
  height: 3rem;

  @media only screen and (max-width: 37.5em) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-grey-5);
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonLeft = styled(Button)`
  left: 0;
`;

export const ButtonRight = styled(Button)`
  right: 0;
`;

export const ChevronLeft = styled(BiChevronLeft)`
  ${chevron}
`;

export const ChevronRight = styled(BiChevronRight)`
  ${chevron}
`;
