import React, { Component } from "react";
import { educationSection } from "../../helpers/languages";
import FormInput from "./FormInput";
import uniqid from "uniqid";

export default class EducationSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = educationSection[this.props.language];
    const educations = this.props.formData;
    const onChangeInput = this.props.onChangeInput;
    const onDeleteUnit = this.props.onDeleteUnit;
    const onAddUnit = this.props.onAddUnit;

    return (
      <div id="education-data" className="section" >
        <h2>{language.education}</h2>
        <button onClick={onAddUnit}>Add new education</button>
        {educations.map((education, i) => (
          <div key={uniqid()} className="education section-unit" data-index={i}>
            <FormInput
              name="facility"
              description={language.facility}
              value={education.facility}
              prompt={language.enterFacility}
              onChangeInput={onChangeInput}
            ></FormInput>
            <FormInput
              name="city"
              description={language.city}
              value={education.city}
              prompt={language.enterCity}
              onChangeInput={onChangeInput}
            ></FormInput>
            <FormInput
              name="degree"
              description={language.degree}
              value={education.degree}
              prompt={language.enterDegree}
              onChangeInput={onChangeInput}
            ></FormInput>
            <FormInput
              name="subject"
              description={language.subject}
              value={education.subject}
              prompt={language.enterSubject}
              onChangeInput={onChangeInput}
            ></FormInput>
            <FormInput
              name="fromWhen"
              description={language.fromWhen}
              value={education.fromWhen}
              prompt={language.enterFromWhen}
              onChangeInput={onChangeInput}
            ></FormInput>
            <FormInput
              name="toWhen"
              description={language.toWhen}
              value={education.toWhen}
              prompt={language.toWhen}
              onChangeInput={onChangeInput}
            ></FormInput>
            <button onClick={onDeleteUnit}>Delete This Education</button>
          </div>
        ))}
      </div>
    );
  }
}
