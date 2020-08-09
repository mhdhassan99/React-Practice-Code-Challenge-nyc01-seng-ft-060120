import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    currentSushi: [],
    sushiLevel: 1,
    money: 50,
    eaten: []
  }
  
  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushi => this.setState({ sushi: sushi, currentSushi: sushi.slice(0, 4) }))
  }

  moreButtonHandler = (e) => {
    //  console.log(this.state)
     this.setState({
       currentSushi: this.state.sushi.slice(4*this.state.sushiLevel, (4*this.state.sushiLevel) + 4),
       sushiLevel: this.state.sushiLevel + 1
     })
   }
  eatenHandler = (obj) => {
    if(obj.price <= this.state.money && !this.state.eaten.includes(obj)){
      let newMoney = this.state.money - obj.price
      this.setState({
        eaten: [...this.state.eaten, obj],
        money: newMoney
      })
    }
  }


  render() { 
    return (
      <div className="app">
        <SushiContainer moreButtonHandler={this.moreButtonHandler} currentSushi={this.state.currentSushi} eatenHandler={this.eatenHandler} eaten={this.state.eaten}/>
        <Table money={this.state.money} eatenArr={this.state.eaten}/>
      </div>
    );
  }
}

export default App;