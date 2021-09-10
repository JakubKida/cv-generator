import { buttons } from "../helpers/languages";

const ControlButtons = (props) => {
  const language = buttons[props.language];

  const clearAllFields = props.clearAllFields;
  const loadExample = props.loadExample;
  return (
    <div className="buttons-area">
      <button className="load-example" onClick={loadExample}>
        {language.loadExample}
      </button>
      <button className="clear-all" onClick={clearAllFields}>
        {language.clearAll}
      </button>
    </div>
  );
};

export default ControlButtons;
