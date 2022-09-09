import React, { Component } from 'react'

export default class ClassComponent extends Component {
  state={
     counter:0,
     isVisible:true,
  } 

  increase(){
     this.setState({counter: this.state.counter + 1});
  }

  render() {
    console.log(this.state.counter);
    return (
        <div className='box'>
            <h2> Class Component</h2>
            <p>Counter : {this.state.counter}</p>
        <button onClick={()=>this.increase()}>Increase</button>
         </div>
    )
  }
}
