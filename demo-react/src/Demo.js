import React, {Component} from 'react';

class Demo extends Component{
    constructor(props){
        super(props);
     this.forceUpdateRandomNumber=this.forceUpdateRandomNumber.bind(this);
    }
    forceUpdateRandomNumber(){
        this.forceUpdate();
    }
    render(){
        return(
            <div class="App-intro">
            <h1>Componenets API</h1>
            <button onClick={this.forceUpdateRandomNumber}>RandomNumber</button>
            <h4>Random Number {Math.random()}</h4>

            </div>
        );
    }

}
export default Demo;