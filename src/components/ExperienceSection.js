import { Component } from "react";
import { experienceSection } from "../helpers/languages";

export default class ExperienceSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = experienceSection[this.props.language];
    // let experiences = this.props.experiencesArray
    let experiences = ["",""];
    return (
      <div className="experience-section">
        <h2>{language.experience}</h2>
        {experiences}
        <button>Add new position</button>
        {experiences.map((experience) => (
          <div className="experience">
            <label for="position">{language.position}</label>
            <input
              name="position"
              type="text"
              value={experience.position}
              placeholder={language.enterPosition}
            ></input>
            <label for="company">{language.company}</label>
            <input
              name="company"
              type="text"
              value={experience.company}
              placeholder={language.enterCompany}
            ></input>
            <label for="city">{language.city}</label>
            <input
              name="city"
              type="text"
              value={experience.city}
              placeholder={language.enterCity}
            ></input>
            <label for="from">{language.from}</label>
            <input
              name="from"
              type="text"
              value={experience.from}
              placeholder={language.fromWhen}
            ></input>
            <label for="to">{language.to}</label>
            <input
              name="to"
              type="text"
              value={experience.to}
              placeholder={language.toWhen}
            ></input>
          </div>
        ))}
      </div>
    );
  }
}
