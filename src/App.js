import FilloutForm from "./components/FilloutForm";
import CreatedCV from "./components/CreatedCv";
import "./styles/style.css";
import ControlButtons from "./components/ControlButtons";
import React from "react";
import uniqid from "uniqid";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { exampledata } from "./helpers/exampledata";
import { buttons } from "./helpers/languages";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.clearAllFields = this.clearAllFields.bind(this);
    this.loadExample = this.loadExample.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.state = {
      image: {},
      language: "polish",
      data: {
        "personal-data": [{}],
        "experience-data": [{}],
        "education-data": [{}],
        "skills-data": [{}],
        "interests-data": [{}],
      },
    };
  }

  changeLanguage(event) {
    event.preventDefault();
    this.setState({ language: event.target.dataset.language });
  }

  clearAllFields() {
    this.setState({
      data: {
        "personal-data": [{}],
        "experience-data": [{}],
        "education-data": [{}],
        "skills-data": [{}],
        "interests-data": [{}],
      },
    });
  }

  loadExample() {
    this.setState({ data: exampledata });
  }

  async handleImageChange(event) {
    await this.setState({ image: event.target.files[0] });
    const image = this.state.image;
    if (image === undefined) {
      document.querySelector(".image-preview").remove();
    } else {
      const fr = new FileReader();
      fr.readAsDataURL(this.state.image);
      fr.onload = function (e) {
        let sideArea = document.querySelector(".side-area");
        let imgElem;
        if (document.querySelector(".image-preview") === null) {
          imgElem = document.createElement("img");
        } else {
          imgElem = document.querySelector(".image-preview");
        }

        imgElem.classList.add("image-preview");
        imgElem.src = this.result;
        sideArea.prepend(imgElem);
      };
    }
  }

  handleChange(event) {
    // debugger;
    let name = event.target.name;
    let value = event.target.value;
    let sectionName = event.target.closest(".section").id;
    let index = event.target.closest(".section-unit").dataset.index;

    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    if (copiedObj[index] === undefined) {
      copiedObj.push({});
    }
    copiedObj[index][name] = value;

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));

    // setTimeout(() => console.log(this.state), 100);
  }

  deleteUnit(event) {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;
    let unitIndex = event.target.closest(".section-unit").dataset.index;

    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    if (copiedObj[unitIndex] !== undefined) {
      copiedObj.splice(unitIndex, 1);
    }

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));
  }

  addUnit(event) {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;

    const copiedObj = JSON.parse(JSON.stringify(this.state.data[sectionName]));

    copiedObj.push({ key: uniqid() });

    this.setState((prevState) => ({
      data: {
        ...this.state.data,
        [sectionName]: copiedObj,
      },
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="change-lang">
          <button
            className="lang-button lang-pol"
            data-language="polish"
            onClick={this.changeLanguage}
          >
          </button>
          <button
            className="lang-button lang-eng"
            data-language="english"
            onClick={this.changeLanguage}
          >
          </button>
        </div>
        <FilloutForm
          language={this.state.language}
          data={this.state.data}
          handleChange={this.handleChange}
          addUnit={this.addUnit}
          deleteUnit={this.deleteUnit}
          onImageChange={this.handleImageChange}
        ></FilloutForm>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button className="generate-pdf" onClick={handlePrint}>
                {buttons[this.state.language].generatePDF}
              </button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ControlButtons
          loadExample={this.loadExample}
          language={this.state.language}
          data={this.state.data}
          clearAllFields={this.clearAllFields}
        ></ControlButtons>
        <div className="cv-area">
          <CreatedCV
            language={this.state.language}
            ref={(el) => (this.componentRef = el)}
            image={this.state.image}
            data={this.state.data}
          ></CreatedCV>
        </div>
      </div>
    );
  }
}

export default App;
