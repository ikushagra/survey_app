import React, { useState } from "react";

export default function MultiQuest() {
  const [surveyQuest, setSurveyQuest] = useState("");
  const [answerQuest, setAnswerQuest] = useState("");
  const [anslist, setAnslist] = useState([]);
  const [list, setList] = useState();
  const handleMultiSurveyQuest = (e) => {
    setSurveyQuest(e.target.value);
  };
  const handleMultiSurveyAns = (e) => {
    setAnswerQuest(e.target.value);
  };
  var d = new Date();

  const addToAnswer = () => {
    setAnslist([
      ...anslist,
      {
        id: d.getTime(),
        value: answerQuest
      }
    ]);
  };
  const removeAns = (index) => {};
  console.log(anslist.id);
  return (
    <div>
      <div>Question</div>
      <input value={surveyQuest} onChange={handleMultiSurveyQuest} />

      <div>
        {anslist.map((ans, index) => (
          <div>
            <input key={index} value={ans.value} />
            <button onClick={() => removeAns(index)}>-</button>
          </div>
        ))}
        <input value={answerQuest} onChange={handleMultiSurveyAns} />{" "}
        <button onClick={addToAnswer}>ADD</button>{" "}
      </div>
    </div>
  );
}
