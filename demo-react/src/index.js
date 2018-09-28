import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter as Router ,Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Demo from './Demo';

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/header">Header</Link></li>
            </ul>

            <hr/>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/demo" component={Demo}></Route>
            <Route exact path="/header" component={Header}></Route>
        </div>
    </Router>
    ,document.getElementById('root')
);


//ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


















// function tick(){
//     const element = (
//         <div>
//             <h1>Hello World</h1>
//             <h2>The current time is :{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element, 
//         document.getElementById('root'));
// //ReactDOM.render(<App/>, document.getElementById('root'));
// //registerServiceWorker();
// }

// setInterval(tick,2000);