import React from "react";

import Review from "../review/review.component";

import { PeopleContainer } from "./people-reviews.styles";

const PeopleReviews = ({ people, index }) => (
  <PeopleContainer>
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
      return <Review key={person.id} position={position} person={person} />;
    })}
  </PeopleContainer>
);

export default PeopleReviews;
