import React, { Component } from "react";
import { buttons } from "../helpers/languages";

export default class ControlButtons extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = buttons[this.props.language];

    return (
      <div className="buttons-area">
        <button className="load-example">{language.loadExample}</button>
        <button className="clear-all">{language.clearAll}</button>
      </div>
    );
  }
}
