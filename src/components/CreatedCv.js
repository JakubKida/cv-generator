import React, { Component } from "react";

export default class CreatedCV extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-area">
        <div id="generated-cv"> This is your cv !</div>
      </div>
    );
  }
}
