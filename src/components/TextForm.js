import React, { useState } from "react";

export default function TextForm(props) {
  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const resetText = () => {
    setText("");
    props.showAlert("TextArea reset", "warning");
  };
  const convertLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };

  const [text, setText] = useState("");
  //   setText("setText");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label
            htmlFor="myText"
            className={`form-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.label}
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            placeholder="Enter Text Here"
            onChange={handleTextChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1 "
          onClick={convertUpper}
        >
          Convert to upper case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1 "
          onClick={resetText}
        >
          Reset
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={convertLower}
        >
          Convert to lower case
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h5>Text Summary</h5>

        <p>No of Characters - {text.length}</p>
        <p>
          No of Words -{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
