import React, { Component } from "react";
import EducationSection from "./FormSections/EducationSection";
import ExperienceSection from "./FormSections/ExperienceSection";
import InterestsSection from "./FormSections/InterestsSection";
import PersonalDataSection from "./FormSections/PersonalDataSection";
import SkillsSection from "./FormSections/SkillsSection";

export default class FilloutForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.addUnit = this.addUnit.bind(this);

    this.state = {
      data: {
        "personal-data": [{ name: "Lol", address: "trolo", phone: "", email: "" }],
        "experience-data": [{}],
        "education-data": [{ facility: "Poli" }, { facility: "Uni" }],
        "skills-data": [{}],
        "interests-data": [{}],
      },
    };
  }

  handleChange(event) {
    // debugger;
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

  deleteUnit(event) {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;
    let unitIndex = event.target.closest(".section-unit").dataset.index;

    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    if (copiedObj[unitIndex] !== undefined) {
      copiedObj.splice(unitIndex, 1);
    }

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));
  }

  addUnit(event) {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;

    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    copiedObj.push({});

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));
  }

  render() {
    const language = this.props.language;
    const data = this.state.data;

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
            onDeleteUnit={this.deleteUnit}
            onAddUnit={this.addUnit}
          ></ExperienceSection>
          <SkillsSection
            formData={data["skills-data"]}
            language={language}
            onChangeInput={this.handleChange}
            onDeleteUnit={this.deleteUnit}
            onAddUnit={this.addUnit}
          ></SkillsSection>
          <EducationSection
            formData={data["education-data"]}
            language={language}
            onChangeInput={this.handleChange}
            onDeleteUnit={this.deleteUnit}
            onAddUnit={this.addUnit}
          ></EducationSection>
          <InterestsSection
            formData={data["interests-data"]}
            language={language}
            onChangeInput={this.handleChange}
            onDeleteUnit={this.deleteUnit}
            onAddUnit={this.addUnit}
          ></InterestsSection>
        </form>
      </div>
    );
  }
}
