import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
  },
  scissor: {
    name: "Scissor",
    img: "https://media.amway.co.kr/sys-master/images/h3d/h84/8801003995166",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judgement(choice[userChoice], comChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissor" ? "win" : "lose";
    else if (user.name == "Scissor")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  };
  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={comSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
