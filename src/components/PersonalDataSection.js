import React, { Component } from "react";
import { personalSection } from "../helpers/languages";

export default class PersonalDataSection extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const language = personalSection[this.props.language];
    return (
      <div className="personal-data-section">
        <h3>{language.personalSection}</h3>
        <label for="name">{language.name}</label>
        <input
          name="name"
          type="text"
          placeholder={language.enterYourName}
        ></input>
        <label for="second-name">{language.secondName}</label>
        <input
          name="second-name"
          type="text"
          placeholder={language.enterYourSecondName}
        ></input>
        <label for="title">{language.title}</label>
        <input
          name="title"
          type="text"
          placeholder={language.enterYourTitle}
        ></input>
        <label for="address">{language.address}</label>
        <input
          name="address"
          type="text"
          placeholder={language.enterYourAddress}
        ></input>
        <label for="phone">{language.phone}</label>
        <input
          name="phone"
          type="text"
          placeholder={language.enterYourPhone}
        ></input>
        <label for="email">{language.email}</label>
        <input name="email" type="text" placeholder={language.email}></input>
        <label for="description">{language.description}</label>
        <input
          name="description"
          type="text"
          placeholder={language.enterDescription}
        ></input>
      </div>
    );
  }
}
