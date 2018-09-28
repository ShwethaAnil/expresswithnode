import React, { Component } from 'react';
import './App.css';
import  Header  from './Header';
import  Content  from './Content'
import Demo from './Demo';
import Clock from './Clock';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      headerText:"welcome to Our App",
      contentText:"content page"
    };
  }
  render() {
    return (
      <div className="App">
      <h1>{this.state.headerText}</h1>
      <h1>{this.state.contentText}</h1>
       <Header/>
        <Content/> 
        <Clock/>
        <Demo/>
      </div>
    );
  }
}
export default App;
