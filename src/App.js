import React from 'react';

class App extends React.Component{
  state= {value: 0}

  render(){
    return (
      <div className="App">
      <h1 className= "App-title">Counter</h1>
      <p>{this.state.value}</p>
      <button>-</button>
      <button>+</button>
      </div>
    )
  }
}

export default App;