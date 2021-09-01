import React, { Component } from "react";
import { personalSection } from "../../helpers/languages";
import FormInput from "./FormInput";

export default class PersonalDataSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = personalSection[this.props.language];
    const personalData = this.props.formData[0];
    const onChangeInput = this.props.onChangeInput;
    const onImageChange = this.props.onImageChange;

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
          <input type="file" onChange={onImageChange}></input>
        </div>
      </div>
    );
  }
}
