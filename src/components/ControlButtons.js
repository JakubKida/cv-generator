import React, { Component } from "react";

export default class ControlButtons extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buttons-area">
        <button className="generate-pdf">Generate PDF</button>
        <button className="load-example">Load Example Data</button>
        <button className="clear-all">Clear all fields</button>
      </div>
    );
  }
}
