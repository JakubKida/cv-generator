import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import React, { useRef, useState } from "react";
import FilloutForm from "./components/FilloutForm";
import CreatedCV from "./components/CreatedCv";
import ControlButtons from "./components/ControlButtons";
import { exampledata } from "./helpers/exampledata";
import { buttons } from "./helpers/languages";
import uniqid from "uniqid";
import "./styles/style.css";

const App = (props) => {
  const [image, setImage] = useState({});
  const [language, setLanguage] = useState("polish");
  const [data, setData] = useState({
    "personal-data": [{}],
    "experience-data": [{}],
    "education-data": [{}],
    "skills-data": [{}],
    "interests-data": [{}],
  });

  const componentRef = useRef();

  const changeLanguage = (event) => {
    event.preventDefault();
    setLanguage(event.target.dataset.language);
  };

  const clearAllFields = () => {
    setData({
      "personal-data": [{}],
      "experience-data": [{}],
      "education-data": [{}],
      "skills-data": [{}],
      "interests-data": [{}],
    });
  };

  const loadExample = () => {
    setData(exampledata);
  };

  const handleImageChange = async (event) => {
    await setImage(event.target.files[0]);
    if (image === undefined) {
      document.querySelector(".image-preview").remove();
    } else {
      const fr = new FileReader();
      fr.readAsDataURL(image);
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
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let sectionName = event.target.closest(".section").id;
    let index = event.target.closest(".section-unit").dataset.index;

    const copiedObj = JSON.parse(JSON.stringify(data[sectionName]));

    if (copiedObj[index] === undefined) {
      copiedObj.push({});
    }
    copiedObj[index][name] = value;

    setData({
      ...data,
      [sectionName]: copiedObj,
    });
  };

  const deleteUnit = (event) => {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;
    let unitIndex = event.target.closest(".section-unit").dataset.index;

    const copiedObj = JSON.parse(JSON.stringify(data[sectionName]));

    if (copiedObj[unitIndex] !== undefined) {
      copiedObj.splice(unitIndex, 1);
    }

    setData({
      ...data,
      [sectionName]: copiedObj,
    });
  };

  const addUnit = (event) => {
    event.preventDefault();
    let sectionName = event.target.closest(".section").id;

    const copiedObj = JSON.parse(JSON.stringify(data[sectionName]));

    copiedObj.push({ key: uniqid() });

    setData({
      ...data,
      [sectionName]: copiedObj,
    });
  };

  return (
    <div className="App">
      <div className="change-lang">
        <button
          className="lang-button lang-pol"
          data-language="polish"
          onClick={changeLanguage}
        ></button>
        <button
          className="lang-button lang-eng"
          data-language="english"
          onClick={changeLanguage}
        ></button>
      </div>
      <FilloutForm
        language={language}
        data={data}
        handleChange={handleChange}
        addUnit={addUnit}
        deleteUnit={deleteUnit}
        onImageChange={handleImageChange}
      ></FilloutForm>
      <ReactToPrint
        trigger={() => (
          <button className="generate-pdf">{buttons[language].generatePDF}</button>
        )}
        content={() => componentRef.current}
      />

      <ControlButtons
        loadExample={loadExample}
        language={language}
        data={data}
        clearAllFields={clearAllFields}
      ></ControlButtons>
      <div className="cv-area">
        <CreatedCV
          language={language}
          ref={componentRef}
          image={image}
          data={data}
        ></CreatedCV>
      </div>
    </div>
  );
};

export default App;
