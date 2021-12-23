import React, { useState, useEffect } from "react";

import PeopleReviews from "./components/people-reviews/people-reviews.component";
import Buttons from "./components/buttons/buttons.component";

import people from "./data";

import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const last = people.length - 1;
    if (index < 0) setIndex(last);
    if (index > last) setIndex(0);

    //Autoslider
    const intervalId = setInterval(() => setIndex(index + 1), 3000);
    return () => clearInterval(intervalId);
  }, [index]);

  const rightClickHandler = () => setIndex(index + 1);

  const leftClickHandler = () => setIndex(index - 1);

  return (
    <div className="app">
      <h1 className="heading-primary">
        <span>/</span>Reviews
      </h1>
      <div className="content">
        <PeopleReviews people={people} index={index} />
        <Buttons
          rightClickHandler={rightClickHandler}
          leftClickHandler={leftClickHandler}
        />
      </div>
    </div>
  );
};

export default App;
