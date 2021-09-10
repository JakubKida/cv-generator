import { buttons } from "../helpers/languages";
import EducationSection from "./FormSections/EducationSection";
import ExperienceSection from "./FormSections/ExperienceSection";
import InterestsSection from "./FormSections/InterestsSection";
import PersonalDataSection from "./FormSections/PersonalDataSection";
import SkillsSection from "./FormSections/SkillsSection";

// form with separate component for each section
const FilloutForm = (props) => {
  const language = props.language;
  const { data, handleChange, deleteUnit, addUnit, onImageChange } = props;

  return (
    <div className="form-area">
      <form id="fill-form">
        <h2 className="form-header">{buttons[language].fillTheForm}</h2>
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
        <EducationSection
          formData={data["education-data"]}
          language={language}
          onChangeInput={handleChange}
          onDeleteUnit={deleteUnit}
          onAddUnit={addUnit}
        ></EducationSection>
        <SkillsSection
          formData={data["skills-data"]}
          language={language}
          onChangeInput={handleChange}
          onDeleteUnit={deleteUnit}
          onAddUnit={addUnit}
        ></SkillsSection>
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
};

export default FilloutForm;
