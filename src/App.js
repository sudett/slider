import React from "react";

import PeopleReviews from "./components/people-reviews/people-reviews.component";
// import Buttons from "./components/buttons/buttons.component";

import people from "./data";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  rightClickHandler = () => {};
  leftClickHandler = () => {};

  render() {
    return (
      <div className="app">
        <h1 className="heading-primary">
          <span>/</span>Reviews
        </h1>
        <div className="content">
          <PeopleReviews people={people} index={this.state.index} />
          {/* <Buttons /> */}
        </div>
      </div>
    );
  }
}
