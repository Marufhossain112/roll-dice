import { useState } from "react";
import "./App.css";
import RollDice1 from "./components/RollDice/RollDice1";
import RollDice2 from "./components/RollDice/RollDice2";
function App() {
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [pass, setPass] = useState(false);
  const [pass2, setPass2] = useState(true);
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(false);

  return (
    <div className="flex justify-around mx-auto w-[40%] relative items-center h-[100vh]">
      <RollDice1
        setPass={setPass}
        pass2={pass2}
        setDisable={setDisable}
        setDisable2={setDisable2}
        disable={disable}
        setHide={setHide}
        setHide2={setHide2}
        hide2={hide2}
      ></RollDice1>
      <RollDice2
        setPass2={setPass2}
        pass={pass}
        setDisable={setDisable}
        setDisable2={setDisable2}
        disable2={disable2}
        setHide={setHide}
        setHide2={setHide2}
        hide={hide}
      ></RollDice2>
    </div>
  );
}

export default App;
