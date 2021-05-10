import React, { useState } from "react";
import MultiQuest from "./MultiQuest";
import SingleQuest from "./SingleQuest";
export default function Create(props) {
  const [question] = useState([
    {
      label: "single",
      value: "single"
    },
    {
      label: "multi",
      value: "multi"
    }
  ]);

  const [selection, setSelection] = useState("");

  let handleChange = (e) => {
    console.log(e.target.value);
    setSelection(e.target.value);
  };

  if (selection === "") {
    return (
      <div>
        <select value={question} onChange={handleChange}>
          <option>select</option>
          {question.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else if (selection === "single") {
    return (
      <div>
        <select value={question} onChange={handleChange}>
          <option>{selection}</option>
          {question.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <SingleQuest />
      </div>
    );
  } else if (selection === "multi") {
    return (
      <div>
        <select value={question} onChange={handleChange}>
          <option>{selection}</option>
          {question.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <MultiQuest />
      </div>
    );
  } else {
    return (
      <div>
        <select value={question} onChange={handleChange}>
          {question.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
