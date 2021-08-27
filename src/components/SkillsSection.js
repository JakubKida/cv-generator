import React, { Component } from "react";
import { skillsSection } from "../helpers/languages";

export default class SkillsSection extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        let skills = ["", ""];
        const language = skillsSection[this.props.language];
        return(
            <div className="skills-section">
            <h2>{language.skills}</h2>
            {skills.map((skill) => (
                <div className="Skill">
                    Skill
                </div>
              ))}
            </div>
        )
    }
}