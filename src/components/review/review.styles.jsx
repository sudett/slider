import styled from "styled-components";

import { FaQuoteRight } from "react-icons/fa";

const reviewPosition = ({ position }) => {
  if (position === "active-review") return `transform: translateX(0)`;
  if (position === "prev-last-review") return `transform: translateX(-100%)`;
  if (position === "next-review") return `transform: translateX(100%)`;
};

export const ReviewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  opacity: ${({ position }) => (position === "active-review" ? "1" : "0")};
  ${reviewPosition}
`;

export const ReviewImage = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
  margin-bottom: 1.5rem;
`;

export const ReviewName = styled.h4`
  color: var(--clr-primary-4);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const ReviewTitle = styled.span`
  color: var(--clr-grey-2);
  text-transform: capitalize;
  margin-bottom: 3rem;
`;

export const ReviewQuote = styled.p`
  text-align: center;
  width: 90%;
`;

export const QuoteRight = styled(FaQuoteRight)`
  width: 4rem;
  height: 4rem;
  fill: var(--clr-primary-5);
  margin-top: 2rem;
`;
