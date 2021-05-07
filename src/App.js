import Wall from "./Wall";
import Create from "./Create";
import Take from "./Take";
import { useState } from "react";
export default function App() {
  const [create, setCreate] = useState(false);
  const [take, setTake] = useState(false);

  let changeCreate = () => {
    setCreate(true);
  };
  let changeTake = () => {
    setTake(true);
  };
  if (create === false && take === false) {
    return (
      <Wall handleCreateSurvey={changeCreate} handleTakeSurvey={changeTake} />
    );
  } else if (take === true) {
    return (
      <div className="App">
        <Take />
      </div>
    );
  } else if (create === true) {
    return (
      <div className="App">
        <Create />
      </div>
    );
  }
}
