import React from "react";

import Review from "../review/review.component";

import "./people-reviews.styles.css";

const PeopleReviews = ({ people, index }) => (
  <div className="people">
    {people.map((person, personIndex) => {
      let position = "next-review";
      if (personIndex === index) {
        position = "active-review";
      }

      if (
        personIndex === index - 1 ||
        (personIndex === people.length - 1 && index === 0)
      ) {
        position = "prev-last-review";
      }
      return <Review position={position} key={person.id} person={person} />;
    })}
  </div>
);

export default PeopleReviews;
