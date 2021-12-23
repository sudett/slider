import React from "react";

import {
  ReviewContainer,
  ReviewImage,
  ReviewName,
  ReviewTitle,
  ReviewQuote,
  QuoteRight,
} from "./review.styles";

const Review = ({ person, position }) => {
  const { name, image, title, quote } = person;

  return (
    <ReviewContainer position={position}>
      <ReviewImage src={image} alt={name} />
      <ReviewName>{name}</ReviewName>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewQuote>{quote}</ReviewQuote>
      <QuoteRight />
    </ReviewContainer>
  );
};

export default Review;
