import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
}

myPost(e){
  e.preventDefault();
  var url = 'http://localhost:3210/data';
  axios.post(url, {
    name: this.inputname.value,
    quantity: this.inputquantity.value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.inputname.value = '';
  this.inputquantity.value = '';
};

myGet(e){
  e.preventDefault();
  var url = 'http://localhost:3210/data';
  axios.get(url)
  .then((myData) => {
    console.log(myData.data);
    this.setState({
      data: myData.data,
    }) 
  })
};

render() {
  const dataMySQL = this.state.data.map((item, index)=>{
    var myarray = ['Name: ',item.name,', Quantity: ', item.quantity,].join(' ');
    return <p key={index}>{myarray}</p>;
  })
  return (
   <div className="container">
   
     <center style={{margin:'25px'}}>
       <h3>React Express MySQL</h3>
     <form>
  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="name" 
    ref={ inname => this.inputname = inname }
    placeholder="Input the name"/>
  </div>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="number" id="quantity" 
    ref={ inquantity => this.inputquantity = inquantity }
    placeholder="Input the quantity"/>
  </div>
  <button className="btn btn-primary" style={{width:'100px'}}
  onClick={this.myPost.bind(this)}>POST</button>
  <button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  onClick={this.myGet.bind(this)}>GET</button>
</form>
     <div>
       { dataMySQL }
     </div>
     </center>
     
   </div>
  );
 }
 }
 
export default App;