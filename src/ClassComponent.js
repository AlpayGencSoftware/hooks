import React, { Component } from 'react'

export default class ClassComponent extends Component {
  state={
     counter:0,
     isVisible:true,
  }

    componentDidMount(){
       console.log('Component Did Mount is working.');
    } 
    componentDidUpdate(){
        console.log("componentDidupdate calıştı.");
    }
    increase(){
       this.setState({counter: this.state.counter + 1});
    }



  render() {
    console.log(this.state.counter);
    return (
        <>
            <h2> Class Component</h2>
            <p>Counter : {this.state.counter}</p>
        <button onClick={()=>this.increase()}>Increase</button>
         </>
    )
  }
}
