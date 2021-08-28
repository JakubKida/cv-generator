import { Component } from "react";
import { experienceSection } from "../helpers/languages";
import FormInput from "./FormInput";
import uniqid from 'uniqid';

export default class ExperienceSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state={
      experiencesAmount: 0,
    }
  }

  render() {
    const language = experienceSection[this.props.language];
    // let experiences = this.props.experiencesArray
    const onChangeInput = this.props.onChangeInput;
    let experiences = ["", ""];
    return (
      <div id="experience-data" className="experience section">
        <h2>{language.experience}</h2>
        <button>Add new position</button>
        {experiences.map((experience,i) => (
          <div  key={uniqid()} className="experience section-unit" data-index={i}>
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
            {/* <label for="position">{language.position}</label>
            <input name="position" type="text" value={experience.position} placeholder={language.enterPosition}></input>
            <label for="company">{language.company}</label>
            <input name="company" type="text" value={experience.company} placeholder={language.enterCompany}></input>
            <label for="city">{language.city}</label>
            <input name="city" type="text" value={experience.city} placeholder={language.enterCity}></input>
            <label for="from">{language.from}</label>
            <input name="from" type="text" value={experience.from} placeholder={language.fromWhen}></input>
            <label for="to">{language.to}</label>
            <input name="to" type="text" value={experience.to} placeholder={language.toWhen}></input> */}
            <button>Delete this position</button>
          </div>
        ))}
      </div>
    );
  }
}
