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

  const input = document.getElementById("input");
  const addToAnswer = () => {
    setAnslist([
      ...anslist,
      {
        id: d.getTime(),
        value: answerQuest
      }
    ]);
  };
  const removeAns = (id) => {
    const res = anslist.filter((word) => word.id !== id);
    setAnslist(res);
  };
  console.log(anslist.id);
  return (
    <div>
      <div>Question</div>
      <input value={surveyQuest} onChange={handleMultiSurveyQuest} />

      <div>
        {anslist.map((ans, index) => (
          <div>
            <input key={ans.id} value={ans.value} />
            <button
              onClick={() => {
                removeAns(ans.id);
              }}
            >
              -
            </button>
          </div>
        ))}
        <input id="input" value={answerQuest} onChange={handleMultiSurveyAns} />{" "}
        <button onClick={addToAnswer}>ADD</button>{" "}
      </div>
    </div>
  );
}
