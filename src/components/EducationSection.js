import React, { Component } from "react";
import { educationSection } from "../helpers/languages";

export default class EducationSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const educations = ["", ""];
    const language = educationSection[this.props.language];
    return (
      <div className="education-section">
        <h2>{language.education}</h2>
        {educations.map((education) => (
          <div className="Skill">Edu</div>
        ))}
      </div>
    );
  }
}
