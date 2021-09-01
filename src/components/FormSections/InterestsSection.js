import React, { Component } from "react";
import { buttons, interestsSection } from "../../helpers/languages";

export default class InterestsSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = interestsSection[this.props.language];
    const buttonNames = buttons[this.props.language];

    const interests = this.props.formData;
    const onChangeInput = this.props.onChangeInput;

    const onDeleteUnit = this.props.onDeleteUnit;
    const onAddUnit = this.props.onAddUnit;

    return (
      <div id="interests-data" className="interests-section section">
        <h2>{language.interests}</h2>
        <button className="add-button" onClick={onAddUnit}>{buttonNames.addInterest}</button>
        {interests.map((interest,i) => (
          <div  key={i} className="interest section-unit" data-index={i}>
            <input type="text" name="interest-name" placeholder={language.enterInterest} value={interest["interest-name"] || ""} onChange={onChangeInput}></input>
            <button className="delete-button" onClick={onDeleteUnit}>{buttonNames.deleteInterest}</button>
          </div>
        ))}
      </div>
    );
  }
}
