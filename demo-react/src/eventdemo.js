import React, {Component} from 'react';

class eventdemo extends Component{
    constructor(props){
        super(props);

        this.forceUpdateRandom=this.forceUpdateRandom.bind(this);
    }
    forceUpdateRandom(){
        this.forceUpdate();
    }

    render(){
        return(
            <div class="App-intro">
                <h1>Function Demo</h1>
                <button onClick="{this.forceUpdateRandom}">Random Generator</button>
                <h4>Random Number: {Math.random()}</h4>
            </div>
        );
    }
}
export default eventdemo;