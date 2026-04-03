import { Component } from "react";

class Header extends Component
{

  constructor()
  {
    super();
    console.log("Constructor get called");
    this.state={
      count:0
    }
    
  }
   increaseCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  decreaseCounter=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render()
  {
      return <div>
        <h1> Class Component</h1>
        <h2>Count = {this.state.count}</h2>
        <button onClick={this.increaseCount}>count++</button>
        <br />
        <button onClick={this.decreaseCounter}>Count--</button>
      </div>
  }
}


export default Header;