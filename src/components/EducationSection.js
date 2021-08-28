import React, { Component } from "react";
import { educationSection } from "../helpers/languages";
import FormInput from "./FormInput";
import uniqid from 'uniqid';

export default class EducationSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const educations = this.props.formData;
    const language = educationSection[this.props.language];
    // const onChangeInput = this.props.onChangeInput;
    const onChangeInput = ()=>{};
    return (
      <div className="section" id="education">
        <h2>{language.education}</h2>
        <button>Add new education</button>
        {educations.map((education,i) => (
          <div  key={uniqid()} className="education section-unit" data-index={i}>
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
            <button>Delete This Education</button>
            {/* <label for="facility">{language.facility}</label>
            <input
              name="facility"
              type="text"
              placeholder={language.enterFacility}
            ></input>
            <label for="city">{language.city}</label>
            <input name="city" type="text" placeholder={language.enterCity}></input>
            <label for="degree">{language.degree}</label>
            <input name="degree" type="text" placeholder={language.enterDegree}></input>
            <label for="subject">{language.subject}</label>
            <input name="subject" type="text" placeholder={language.enterSubject}></input>
            <label for="fromWhen">{language.fromWhen}</label>
            <input
              name="fromWhen"
              type="text"
              placeholder={language.enterFromWhen}
            ></input>
            <label for="toWhen">{language.fromWhen}</label>
            <input name="toWhen" type="text" placeholder={language.enterFromWhen}></input> */}
          </div>
        ))}
      </div>
    );
  }
}
