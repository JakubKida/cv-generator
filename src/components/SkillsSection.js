import React, { Component } from "react";
import uniqid from 'uniqid';
import { skillsSection } from "../helpers/languages";

export default class SkillsSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let skills = this.props.formData;
    const language = skillsSection[this.props.language];
    const onChangeInput = this.props.onChangeInput;
    return (
      <div id="skills-data" className="skills-section section">
        <h2>{language.skills}</h2>
        <button>Add new skill</button>
        {skills.map((skill,i) => (
          <div key={uniqid()} className="skill section-unit" data-index={i}>
            <input type="text" name="skill-name" placeholder={language.enterSkill} value={skill.skillName}onChange={onChangeInput}></input>
            <button>Delete this skill</button>
          </div>
        ))}
      </div>
    );
  }
}
