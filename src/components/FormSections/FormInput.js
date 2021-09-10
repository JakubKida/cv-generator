// a single input component that belongs to a section, 
// and which change is reflected in GeneratedCv component
const FormInput = (props) => {
  const { name, description, prompt, onChangeInput, value } = props;
  
  return (
    <div className="form-input">
      <label htmlFor={name}>{description}</label>
      <input
        name={name}
        type="text"
        placeholder={prompt}
        value={value || ""}
        onChange={onChangeInput}
      ></input>
    </div>
  );
};

export default FormInput;
