import { buttons, educationSection } from "../../helpers/languages";
import FormInput from "./FormInput";

const EducationSection = (props) => {
  const language = educationSection[props.language];
  const buttonNames = buttons[props.language];

  const educations = props.formData;
  const onChangeInput = props.onChangeInput;

  const onDeleteUnit = props.onDeleteUnit;
  const onAddUnit = props.onAddUnit;

  return (
    <div id="education-data" className="section">
      <h2>{language.education}</h2>
      <button className="add-button" onClick={onAddUnit}>
        {buttonNames.addEducation}
      </button>
      {educations.map((education, i) => (
        <div key={i} className="education section-unit" data-index={i}>
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
            prompt={language.enterToWhen}
            onChangeInput={onChangeInput}
          ></FormInput>
          <button className="delete-button" onClick={onDeleteUnit}>
            {buttonNames.deleteEducation}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
