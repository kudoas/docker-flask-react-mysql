import React, { Component } from "react";
import { CONFIG } from "./config.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch(CONFIG.API_BASE_URL).then((results) => {
      results.json();
      console.log(results);
    });
    // .then((players) => this.setState({ players: players }));
  }

  render() {
    const players = this.state.players.map((player, index) => (
      <li key={index}>
        {player.lastname} {player.firstname}
      </li>
    ));

    return (
      <div>
        <h1>Players list</h1>
        <ul>{players}</ul>
      </div>
    );
  }
}

export default App;
