import React, { Component } from "react";
import EducationSection from "./FormSections/EducationSection";
import ExperienceSection from "./FormSections/ExperienceSection";
import InterestsSection from "./FormSections/InterestsSection";
import PersonalDataSection from "./FormSections/PersonalDataSection";
import SkillsSection from "./FormSections/SkillsSection";

export default class FilloutForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = this.props.language;
    // const data = this.state.data;
    const {data, handleChange, deleteUnit, addUnit, onImageChange} = this.props;

    return (
      <div className="form-area">
        <form id="fill-form">
          <h2 className="form-header">Wypełnij poniższe pola</h2>
          <PersonalDataSection
            formData={data["personal-data"]}
            language={language}
            onChangeInput={handleChange}
            onImageChange={onImageChange}
          ></PersonalDataSection>
          <ExperienceSection
            formData={data["experience-data"]}
            language={language}
            onChangeInput={handleChange}
            onDeleteUnit={deleteUnit}
            onAddUnit={addUnit}
          ></ExperienceSection>
          <SkillsSection
            formData={data["skills-data"]}
            language={language}
            onChangeInput={handleChange}
            onDeleteUnit={deleteUnit}
            onAddUnit={addUnit}
          ></SkillsSection>
          <EducationSection
            formData={data["education-data"]}
            language={language}
            onChangeInput={handleChange}
            onDeleteUnit={deleteUnit}
            onAddUnit={addUnit}
          ></EducationSection>
          <InterestsSection
            formData={data["interests-data"]}
            language={language}
            onChangeInput={handleChange}
            onDeleteUnit={deleteUnit}
            onAddUnit={addUnit}
          ></InterestsSection>
        </form>
      </div>
    );
  }
}
