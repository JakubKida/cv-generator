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
    const onChangeInput=this.props.onChangeInput;

    return (
      <div id="personal-data" className="personaldata section section-unit" data-index="0">
        <h3>{language.personalSection}</h3>
        <FormInput
          name="name"
          description={language.name}
          value={personalData.name}
          prompt={language.enterYourName}
          onChangeInput={onChangeInput}
        ></FormInput>
        <FormInput
          name="second-name"
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
      </div>
    );
  }
}