import { buttons, experienceSection } from "../../helpers/languages";
import FormInput from "./FormInput";

const ExperienceSection = (props) => {
  const language = experienceSection[props.language];
  const buttonNames = buttons[props.language];
  const experiences = props.formData;
  const onChangeInput = props.onChangeInput;
  const onDeleteUnit = props.onDeleteUnit;
  const onAddUnit = props.onAddUnit;

  return (
    <div id="experience-data" className="experience section">
      <h2>{language.experience}</h2>
      <button className="add-button" onClick={onAddUnit}>
        {buttonNames.addPosition}
      </button>
      {experiences.map((experience, i) => (
        <div key={i} className="experience section-unit" data-index={i}>
          <FormInput
            name="position"
            description={language.position}
            value={experience.position}
            prompt={language.enterPosition}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="company"
            description={language.company}
            value={experience.company}
            prompt={language.enterCompany}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="city"
            description={language.city}
            value={experience.city}
            prompt={language.enterCity}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="from"
            description={language.from}
            value={experience.from}
            prompt={language.from}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="to"
            description={language.to}
            value={experience.to}
            prompt={language.toWhen}
            onChangeInput={onChangeInput}
          ></FormInput>
          <button className="delete-button" onClick={onDeleteUnit}>
            {buttonNames.deletePosition}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;