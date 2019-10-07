import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: 'Ryan',
      incorrectLetters: []
    }

  }
  componentDidMount() {
    fetch('/all')
      .then(response => response.json())
      .then((word) => {
        this.setState({
          secretWord: word
        })
      })
      .catch((err) => {
        console.log('We have an error in App.jsx, ', err)
      })
    }

    render() {
      return (
        <div className="App">
          <div>
            <button onClick={() => this.handleClearAll()}>Clear All</button>
          </div>
          <h1> {this.state.secretWord} </h1>
        </div>
      );
    }
  }



export default App;