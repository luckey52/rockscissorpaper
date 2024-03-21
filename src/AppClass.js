import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import "./App.css";

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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      comSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let comChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      comSelect: comChoice,
      result: this.judgement(choice[userChoice], comChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissor" ? "win" : "lose";
    else if (user.name == "Scissor")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="you"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="computer"
            item={this.state.comSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissor")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
