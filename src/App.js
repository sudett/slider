import React from "react";

import PeopleReviews from "./components/people-reviews/people-reviews.component";
import Buttons from "./components/buttons/buttons.component";

import people from "./data";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  rightClickHandler = () => {
    const currentIndex = this.state.index;
    if (currentIndex === people.length - 1) {
      this.setState({ index: 0 });
      return;
    }
    this.setState({ index: currentIndex + 1 });
  };

  leftClickHandler = () => {
    const currentIndex = this.state.index;
    if (currentIndex === 0) {
      this.setState({ index: people.length - 1 });
      return;
    }
    this.setState({ index: currentIndex - 1 });
  };

  render() {
    return (
      <div className="app">
        <h1 className="heading-primary">
          <span>/</span>Reviews
        </h1>
        <div className="content">
          <PeopleReviews people={people} index={this.state.index} />
          <Buttons
            rightClickHandler={this.rightClickHandler}
            leftClickHandler={this.leftClickHandler}
          />
        </div>
      </div>
    );
  }
}
