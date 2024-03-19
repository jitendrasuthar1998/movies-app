import React from 'react';

const InputField = (props) => {
    const { title, id, name, error, value, handleChange, type } = props;

    console.log("title is == ", title);
    console.log("id is == ", id);
    console.log("name is == ", name);
    console.log("error is == ", error);
    console.log("value is == ", value);
  return (
    <fieldset>
      <label htmlFor=''>{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter your ${name} here`}
      />
      {error && <p>{error}</p>}
    </fieldset>
  );
};

export default InputField;
