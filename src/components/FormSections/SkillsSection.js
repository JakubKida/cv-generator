import { buttons, skillsSection } from "../../helpers/languages";

const SkillsSection = (props)=> {
    const language = skillsSection[props.language];
    const buttonNames = buttons[props.language];

    const skills = props.formData;
    const onChangeInput = props.onChangeInput;

    const onDeleteUnit = props.onDeleteUnit;
    const onAddUnit = props.onAddUnit;

    debugger;
    return (
      <div id="skills-data" className="skills-section section">
        <h2>{language.skills}</h2>
        <button className="add-button" onClick={onAddUnit}>
          {buttonNames.addSkill}
        </button>
        {skills.map((skill, i) => (
          <div key={i} className="skill section-unit" data-index={i}>
            <input
              type="text"
              name="skill-name"
              placeholder={language.enterSkill}
              value={skill["skill-name"] || ""}
              onChange={onChangeInput}
            ></input>
            <button className="delete-button" onClick={onDeleteUnit}>
              {buttonNames.deleteSkill}
            </button>
          </div>
        ))}
      </div>
    );
}

export default SkillsSection;
