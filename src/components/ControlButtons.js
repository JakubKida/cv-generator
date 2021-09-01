import React, { Component } from "react";
import { buttons } from "../helpers/languages";

export default class ControlButtons extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = buttons[this.props.language];
    const clearAllFields = this.props.clearAllFields;
    const loadExample = this.props.loadExample;

    return (
      <div className="buttons-area">
        <button className="load-example" onClick={loadExample}>
          {language.loadExample}
        </button>
        <button className="clear-all" onClick={clearAllFields}>
          {language.clearAll}
        </button>
      </div>
    );
  }
}
