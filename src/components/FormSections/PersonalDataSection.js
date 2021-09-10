import { personalSection } from "../../helpers/languages";
import FormInput from "./FormInput";

const PersonalDataSection = (props) => {
    const language = personalSection[props.language];
    const personalData = props.formData[0];

    const onChangeInput = props.onChangeInput;
    const onImageChange = props.onImageChange;
    return (
      <div id="personal-data" className="personaldata section">
        <h3>{language.personalSection}</h3>
        <div className="section-unit" data-index="0">
          <FormInput
            name="name"
            description={language.name}
            value={personalData.name}
            prompt={language.enterYourName}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="secondName"
            description={language.secondName}
            value={personalData.secondName}
            prompt={language.enterYourSecondName}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="title"
            description={language.title}
            value={personalData.title}
            prompt={language.enterYourTitle}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="address"
            description={language.address}
            value={personalData.address}
            prompt={language.enterYourAddress}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="phone"
            description={language.phone}
            value={personalData.phone}
            prompt={language.enterYourPhone}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="email"
            description={language.email}
            value={personalData.email}
            prompt={language.enterYourEmail}
            onChangeInput={onChangeInput}
          ></FormInput>
          <FormInput
            name="description"
            description={language.description}
            value={personalData.description}
            prompt={language.enterDescription}
            onChangeInput={onChangeInput}
          ></FormInput>
          <div className="form-input">
            <label htmlFor="image">{language.photo}</label>
            <input name="image" type="file" onChange={onImageChange}></input>
          </div>
        </div>
      </div>
    );
}

export default PersonalDataSection;
