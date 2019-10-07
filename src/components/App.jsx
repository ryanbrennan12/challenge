import React from "react";

// class App extends React.Component {


//   render() {
//     return <h3>Testing from React Woop Woop!</h3>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: 'Ryan',
      incorrectLetters: []
    }
  }
  render() {
    return(
      <div className="App">
        <h1> {this.state.secretWord} </h1>
      </div>
    );
  }
}


export default App;