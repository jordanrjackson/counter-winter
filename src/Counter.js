import React from "react";

class Counter extends React.Component{
  state= {value: 0}
  
  inc= ()=>{
    this.setState((state)=>{
      return {value: state.value + 1}
    })
  }

  dec= ()=>{
    this.setState((state)=>{
      return {value: state.value - 1}
    })
  }

  render(){
    return (
      <div className="App">
      <h1 className= "App-title">Counter</h1>
      <p>{this.props.name} Counter</p>
      <p>{this.state.value}</p>
      <button onClick={this.dec}>-</button>
      <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter;