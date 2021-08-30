import React, { Component } from "react";
import uniqid from 'uniqid';
import { skillsSection } from "../../helpers/languages";

export default class SkillsSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = skillsSection[this.props.language];
    const skills = this.props.formData;
    const onChangeInput = this.props.onChangeInput;
    const onDeleteUnit = this.props.onDeleteUnit;
    const onAddUnit = this.props.onAddUnit;

    return (
      <div id="skills-data" className="skills-section section">
        <h2>{language.skills}</h2>
        <button onClick={onAddUnit}>Add new skill</button>
        {skills.map((skill,i) => (
          <div key={uniqid()} className="skill section-unit" data-index={i}>
            <input type="text" name="skill-name" placeholder={language.enterSkill} value={skill.skillName}onChange={onChangeInput}></input>
            <button onClick={onDeleteUnit}>Delete this skill</button>
          </div>
        ))}
      </div>
    );
  }
}
