import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }


  //Your code here:

  componentDidMount() {
   this.handleAddTimer();
   console.log("I'm here")
  }







  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    console.log(id);
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
      
    })
    )
    // since the id is tied to a state, when we filter that id, it will remove the corresponding time component due to the id no longer being a part of the state. componentWillUnmount will execute after
    // this function has been executed
    console.log("remove timer");
  }


}

export default App;
