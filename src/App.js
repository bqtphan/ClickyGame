import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import maltipoos from "./maltipoos.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    maltipoos,
    message: 0,
    score: 0,
  };

  Clicked = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const maltipoos = this.state.maltipoos.filter(pupper => pupper.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ maltipoos });
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Header />
          <Wrapper>
        
            {this.state.maltipoos.map(pupper => (
              <Cards
              Clicked={this.Clicked}
              id={pupper.id}
              key={pupper.id}
              image={pupper.image}
             />
             ))}
            </Wrapper>
      </div>
    );
  }
}

export default App;
