import React, { useState } from "react";
import buttons from "../modules/buttons.mjs";

export default function TextArea(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#606060",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            className="form-control my-1"
            id="myTextBox"
            rows="8"
            onChange={(e) => buttons.onChangeHandler(e, setText)}
          ></textarea>
        </div>

        {/* Change Case buttons */}
        <div className="dropdown m-1" style={{ display: "inline-block" }}>
          <button
            disabled={text.length === 0}
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Change Case
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  buttons.onClickUppercaseHandler(text, setText);
                  props.showAlert("The text is now in UPPERCASE", "success");
                }}
              >
                UPPERCASE
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  buttons.onClickLowercaseHandler(text, setText);
                  props.showAlert("The text is now in lowercase", "success");
                }}
              >
                lowercase
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  buttons.onClickSentCaseHandler(text, setText);
                  props.showAlert(
                    "The text is now in Sentence case",
                    "success"
                  );
                }}
              >
                Sentence case
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  buttons.onClickTitleCaseHandler(text, setText);
                  props.showAlert("The text is now in Title Case", "success");
                }}
              >
                Title Case
              </button>
            </li>
          </ul>
        </div>

        {/* Clear text button */}
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger m-1"
          onClick={() => {
            buttons.onClickClearHandler(setText);
            props.showAlert("All text cleared", "warning");
          }}
        >
          Clear text
        </button>

        {/* Copy button */}
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success m-1"
          onClick={() => buttons.onClickCopyHandler(text, props.showAlert)}
        >
          Copy
        </button>
      </div>

      {/* Summary */}
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words,{" "}
          {text.length} characters
        </p>
        <p>
          {(
            (text.trim() === "" ? 0 : text.trim().split(/\s+/).length) * 0.005
          ).toFixed(3)}{" "}
          minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
