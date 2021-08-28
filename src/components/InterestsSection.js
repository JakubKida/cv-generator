import React, { Component } from "react";
import { interestsSection } from "../helpers/languages";
import uniqid from 'uniqid';

export default class InterestsSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let interests = this.props.formData;
    const language = interestsSection[this.props.language];
    const onChangeInput = this.props.onChangeInput;

    return (
      <div id="interests-data" className="skills-section section">
        <h2>{language.interests}</h2>
        <button>Add new skill</button>
        {interests.map((interest,i) => (
          <div  key={uniqid()} className="skill section-unit" data-index={i}>
            <input type="text" name="interest-name" placeholder={language.enterInterest} value={interest.interestName} onChange={onChangeInput}></input>
            <button>Delete this skill</button>
          </div>
        ))}
      </div>
    );
  }
}
