import React, { Component } from "react";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import InterestsSection from "./InterestsSection";
import PersonalDataSection from "./PersonalDataSection";
import SkillsSection from "./SkillsSection";

export default class FilloutForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: {
        "personal-data": [{ name: "Lol", address: "trolo" }],
        "experience-data": [{}],
        "education-data": [{ facility: "Poli" }, { facility: "Uni" }],
        "skills-data": [{}],
        "interests-data": [{}],
      },
    };
  }

  handleChange(event) {
    debugger;
    let name = event.target.name;
    let value = event.target.value;
    let sectionName = event.target.closest(".section").id;
    let index = event.target.closest(".section-unit").dataset.index;

    console.log(index);
    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    if (copiedObj[index] === undefined) {
      copiedObj.push({});
    }
    copiedObj[index][name] = value;

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));

    setTimeout(() => console.log(this.state), 100);
  }

  render() {
    const language = this.props.language;
    const data = this.state.data;
    console.log(data);
    return (
      <div className="form-area">
        <form id="fill-form">
          <h2 className="form-header">Wypełnij poniższe pola</h2>
          <PersonalDataSection
            formData={data["personal-data"]}
            language={language}
            onChangeInput={this.handleChange}
          ></PersonalDataSection>
          <ExperienceSection
            formData={data["experience-data"]}
            language={language}
            onChangeInput={this.handleChange}
          ></ExperienceSection>
          <SkillsSection
            formData={data["skills-data"]}
            language={language}
            onChangeInput={this.handleChange}
          ></SkillsSection>
          <EducationSection
            formData={data["education-data"]}
            language={language}
            onChangeInput={this.handleChange}
          ></EducationSection>
          <InterestsSection
            formData={data["education-data"]}
            language={language}
            onChangeInput={this.handleChange}
          ></InterestsSection>
        </form>
      </div>
    );
  }
}
