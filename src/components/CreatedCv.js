import React, { Component } from "react";
import uniqid from 'uniqid';

export default class CreatedCV extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const personalData = this.props.data["personal-data"][0];
    const experienceData = this.props.data["experience-data"];
    const educationData = this.props.data["education-data"];
    const skillsData = this.props.data["skills-data"];
    const interestData = this.props.data["interests-data"];

    return (
      <div className="cv-area">
        <div id="generated-cv">
          <div className="header">
            <div className="name">
              {personalData.name || ""} {personalData.secondName || ""}
            </div>
            <div className="underline"></div>
            <div className="title">{personalData.title}</div>
          </div>
          <div className="main-area">
            <div className="side-area">
              <div className="cv-section">
                <div className="cv-section-title">Kontakt</div>
                <div className="cv-section-title-underline"></div>
                <div className="cv-section-data cv-contact-address">
                  {personalData.address}
                </div>
                <div className="cv-section-data cv-contact-phone">
                  {personalData.phone}
                </div>
                <div className="cv-section-data cv-contact-email">
                  {personalData.email}
                </div>
              </div>
            </div>
            <div className="center-area">
              <div className="cv-section">
                <div className="cv-section-title">Profil</div>
                <div className="cv-section-title-underline"></div>
                <div className="cv-section-data">{personalData.description}</div>
              </div>
              {experienceData.length > 0 && (
                <div className="cv-section">
                  <div className="cv-section-title">Doświadczenie</div>
                  <div className="cv-section-title-underline"></div>
                  <div className="cv-section-data">
                    {experienceData.map((experience) => (
                      <div key={uniqid()} className="cv-section-unit">
                        <div className="cv-experience-position">
                          {experience.position} / {experience.from}-{experience.to}
                        </div>
                        <div className="cv-experience-company">
                          {experience.company}, {experience.city}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {educationData.length > 0 && (
                <div className="cv-section">
                  <div className="cv-section-title">Edukacja</div>
                  <div className="cv-section-title-underline"></div>
                  <div className="cv-section-data">
                    {educationData.map((education) => (
                      <div key={uniqid()} className="cv-section-unit">
                        <div className="cv-education-facility">
                          {education.facility}, {education.city} / {education.fromWhen}-
                          {education.toWhen}
                        </div>
                        <div className="cv-education-degree">
                          Stopień: {education.degree}
                        </div>
                        <div className="cv-education-subject">
                          Przedmiot: {education.subject}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {skillsData.length > 0 && (
                <div className="cv-section">
                  <div className="cv-section-title">Umiejętności</div>
                  <div className="cv-section-title-underline"></div>
                  <div className="cv-section-data">
                    {skillsData.map((skill) => (
                      <ul key={uniqid()} className="cv-section-unit">
                        <li>{skill["skill-name"]}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
              {interestData.length > 0 && (
                <div className="cv-section">
                  <div className="cv-section-title">Zainteresowania</div>
                  <div className="cv-section-title-underline"></div>
                  <div className="cv-section-data">
                    {interestData.map((interest) => (
                      <ul key={uniqid()} className="cv-section-unit">
                        <li>{interest["interest-name"]}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
