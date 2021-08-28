import React, { Component } from "react";

export default class FormInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {name,description,prompt,onChangeInput,value} = this.props;
    return (
      <div className="form-input">
        <label htmlFor={name}>{description}</label>
        <input name={name} type="text" placeholder={prompt} value={value} onChange={onChangeInput}></input>
      </div>
    );
  }
}
