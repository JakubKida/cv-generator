import React, { Component } from "react";
import { personalSection } from "../helpers/languages";
import FormInput from "./FormInput";

export default class PersonalDataSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = personalSection[this.props.language];
    const onChangeInput=this.props.onChangeInput;
    const personalData = this.props.formData[0];
    // console.log(this.props);
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
{/* 
        <label for="name">{language.name}</label>
        <input name="name" type="text" placeholder={language.enterYourName}></input>
        <label for="second-name">{language.secondName}</label>
        <input
          name="second-name"
          type="text"
          placeholder={language.enterYourSecondName}
        ></input>
        <label for="title">{language.title}</label>
        <input name="title" type="text" placeholder={language.enterYourTitle}></input>
        <label for="address">{language.address}</label>
        <input name="address" type="text" placeholder={language.enterYourAddress}></input>
        <label for="phone">{language.phone}</label>
        <input name="phone" type="text" placeholder={language.enterYourPhone}></input>
        <label for="email">{language.email}</label>
        <input name="email" type="text" placeholder={language.email}></input>
        <label for="description">{language.description}</label>
        <input
          name="description"
          type="text"
          placeholder={language.enterDescription}
        ></input> */}
      </div>
    );
  }
}
