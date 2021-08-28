import FilloutForm from "./components/FilloutForm";
import CreatedCV from "./components/CreatedCv";
import './styles/style.css';
import ControlButtons from "./components/ControlButtons";
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      language: 'polish'
    }
  }
  render(){
    return (
      <div className="App">
        <FilloutForm language={this.state.language}></FilloutForm>
        <ControlButtons language={this.state.language}></ControlButtons>
        <CreatedCV></CreatedCV>
      </div>
    );
  }
}

export default App;
