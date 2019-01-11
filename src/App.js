import React from 'react';
import Counter from './Counter'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Counter Example</h1>
        <Counter name="Red" />
        <Counter name="Blue" />
      </div>
    )
  }
}

export default App;