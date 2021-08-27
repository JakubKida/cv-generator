import React, { Component } from "react";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalDataSection from "./PersonalDataSection";
import SkillsSection from "./SkillsSection";

export default class FilloutForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
      const language = this.props.language;
    return (
      <div className="form-area">
        <form id="fill-form">
            <h2 className="form-header">Wypełnij poniższe pola</h2>
            <PersonalDataSection language={language}></PersonalDataSection>
            <ExperienceSection language={language}></ExperienceSection>
            <SkillsSection language={language}></SkillsSection>
            <EducationSection language={language}></EducationSection>
        </form>
      </div>
    );
  }
}
