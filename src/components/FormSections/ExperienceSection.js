import { Component } from "react";
import { experienceSection } from "../../helpers/languages";
import FormInput from "./FormInput";
import uniqid from "uniqid";

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
    const experiences = this.props.formData;
    const onChangeInput = this.props.onChangeInput;
    const onDeleteUnit = this.props.onDeleteUnit;
    const onAddUnit = this.props.onAddUnit;

    return (
      <div id="experience-data" className="experience section">
        <h2>{language.experience}</h2>
        <button onClick={onAddUnit}>Add new position</button>
        {experiences.map((experience, i) => (
          <div key={uniqid()} className="experience section-unit" data-index={i}>
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
            <button onClick={onDeleteUnit}>Delete this position</button>
          </div>
        ))}
      </div>
    );
  }
}
