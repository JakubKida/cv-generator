import { buttons, interestsSection } from "../../helpers/languages";

const InterestsSection=(props)=>{ 
    const language = interestsSection[props.language];
    const buttonNames = buttons[props.language];

    const interests = props.formData;
    const onChangeInput = props.onChangeInput;

    const onDeleteUnit = props.onDeleteUnit;
    const onAddUnit = props.onAddUnit;

    return (
      <div id="interests-data" className="interests-section section">
        <h2>{language.interests}</h2>
        <button className="add-button" onClick={onAddUnit}>{buttonNames.addInterest}</button>
        {interests.map((interest,i) => (
          <div  key={i} className="interest section-unit" data-index={i}>
            <input type="text" name="interest-name" placeholder={language.enterInterest} value={interest["interest-name"] || ""} onChange={onChangeInput}></input>
            <button className="delete-button" onClick={onDeleteUnit}>{buttonNames.deleteInterest}</button>
          </div>
        ))}
      </div>
    ); 
}

export default InterestsSection;
