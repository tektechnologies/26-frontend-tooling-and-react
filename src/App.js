import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let faker = require('faker');

let cowsay = require('cowsay');

//This is the State of our App
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        content: cowsay.say({
        text: faker.lorem.slug(),
      })
    }
    this.updateState = this.updateState.bind(this);
    this.newCowSay = this.newCowSay.bind(this);

  }
updateState(content){
  this.setState({content});
}
  
 newCowSay(){
   this.updateState(cowsay.say({text: faker.lorem.word()}));
 } 

  
//state
  render() {
    return (
      <React.Fragment>
       <section>
          <h1 className="App-title">Generate Cowsay Lorem</h1>
          <div className="container">
                <pre>
                {this.state.content}
                </pre>
             <button onClick={this.newCowSay}>Click Me</button>
           </div>
       
        </section>
      </React.Fragment>
    );
  }
}//close class

export default App;
