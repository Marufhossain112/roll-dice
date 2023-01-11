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
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [winMsg1, setWinMsg1] = useState("Player-1 is winner");
  const [winMsg2, setWinMsg2] = useState("Player-2 is winner");

  if (score1 >= 20) {
    window.location.reload();
  } else if (score2 >= 20) {
    window.location.reload();
  }
  return (
    <>
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
          setScore1={setScore1}
          // checkWinner={checkWinner}
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
          setScore2={setScore2}
        ></RollDice2>
        <div>
          {score1 >= 20 && (
            <h1 className="text-green-500 text-2xl ml-5">{winMsg1}</h1>
          )}
        </div>
        <div>
          {score2 >= 20 && (
            <h1 className="text-green-500  text-2xl ml-5">{winMsg2}</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
