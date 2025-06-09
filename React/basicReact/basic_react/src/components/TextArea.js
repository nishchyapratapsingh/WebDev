import React, { useState } from "react";
import buttons from "../modules/buttons.mjs";

export default function TextArea(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myTextBox"
            rows="8"
            onChange={(e) => buttons.onChangeHandler(e, setText)}
          ></textarea>
        </div>

        {/* Change Case buttons */}
        <div className="dropdown m-1" style={{ display: "inline-block" }}>
          <button
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
                onClick={() => buttons.onClickUppercaseHandler(text, setText)}
              >
                UPPERCASE
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => buttons.onClickLowercaseHandler(text, setText)}
              >
                lowercase
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => buttons.onClickSentCaseHandler(text, setText)}
              >
                Sentence case
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => buttons.onClickTitleCaseHandler(text, setText)}
              >
                Title Case
              </button>
            </li>
          </ul>
        </div>

        {/* Clear text button */}
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={() => buttons.onClickClearHandler(setText)}
        >
          Clear text
        </button>

        {/* Copy button */}
        <button
          type="button"
          className="btn btn-success m-1"
          onClick={() => buttons.onClickCopyHandler(text)}
        >
          Copy
        </button>
      </div>

      {/* Summary */}
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(" ").length} words,{" "}
          {text.length} characters
        </p>
        <p>
          {(
            (text.trim() === "" ? 0 : text.trim().split(" ").length) * 0.003
          ).toFixed(3)}{" "}
          minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
