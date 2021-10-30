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
      intervalId: 0,
    };
  }

  checkNumber = (number) => {
    if (number >= people.length) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  resetTimer = () => {
    clearInterval(this.state.intervalId);
    this.autoSlider();
  };

  rightClickHandler = () => {
    this.resetTimer();
    this.setState({ index: this.checkNumber(this.state.index + 1) });
  };

  leftClickHandler = () => {
    this.resetTimer();
    this.setState({ index: this.checkNumber(this.state.index - 1) });
  };

  autoSlider = () => {
    const slider = setInterval(
      () => this.setState({ index: this.checkNumber(this.state.index + 1) }),
      3000
    );

    this.setState({ intervalId: slider });
  };

  componentDidMount() {
    this.autoSlider();
  }

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
