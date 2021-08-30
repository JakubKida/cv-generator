import FilloutForm from "./components/FilloutForm";
import CreatedCV from "./components/CreatedCv";
import "./styles/style.css";
import ControlButtons from "./components/ControlButtons";
import React from "react";
import uniqid from 'uniqid';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.state = {
      language: "polish",
      data: {
        "personal-data": [{}],
        "experience-data": [{}],
        "education-data": [{ facility: "Poli" }, { facility: "Uni" }],
        "skills-data": [{}],
        "interests-data": [{}],
      },
    };
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

    copiedObj.push({key:uniqid()});

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
        <FilloutForm
          language={this.state.language}
          data={this.state.data}
          handleChange={this.handleChange}
          addUnit={this.addUnit}
          deleteUnit={this.deleteUnit}
        ></FilloutForm>
        <ControlButtons language={this.state.language} data={this.state.data}></ControlButtons>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button className="generate-pdf" onClick={handlePrint}>
                {this.state.language.generatePDF}
              </button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <CreatedCV data={this.state.data} ref={(el) => (this.componentRef = el)}></CreatedCV>
      </div>
    );
  }
}

export default App;
