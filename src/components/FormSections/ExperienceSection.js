import { Component } from "react";
import { buttons, experienceSection } from "../../helpers/languages";
import FormInput from "./FormInput";

export default class ExperienceSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      experiencesAmount: 0,
    };
  }

  render() {
    const language = experienceSection[this.props.language];
    const buttonNames = buttons[this.props.language];
    const experiences = this.props.formData;
    const onChangeInput = this.props.onChangeInput;
    const onDeleteUnit = this.props.onDeleteUnit;
    const onAddUnit = this.props.onAddUnit;
    return (
      <div id="experience-data" className="experience section">
        <h2>{language.experience}</h2>
        <button className="add-button" onClick={onAddUnit}>{buttonNames.addPosition}</button>
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
            <button className="delete-button" onClick={onDeleteUnit}>{buttonNames.deletePosition}</button>
          </div>
        ))}
      </div>
    );
  }
}
