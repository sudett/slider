import React from "react";

import { FaQuoteRight } from "react-icons/fa";

import "./review.styles.css";

const Review = ({ person, position }) => {
  const { name, image, title, quote } = person;

  return (
    <div className={`${position} review`}>
      <img className="review-image" src={image} alt={name} />
      <h4 className="review-name">{name}</h4>
      <span className="review-title">{title}</span>
      <p className="review-quote">{quote}</p>
      <FaQuoteRight className="quote" />
    </div>
  );
};

export default Review;
