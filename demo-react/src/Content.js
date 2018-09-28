import React, { Component } from 'react';
import TableRow from './TableRow';


 class Content extends Component{
    constructor(props){
      super(props);
  
      this.state={
        tabledata:[
          {
            "id":1,
            "name":"Shwetha"
          },
          {
            "id":2,
            "name":"Anitha"
          },
          {
            "id":3,
            "name":"Geetha"
          }
        ]
      };
       
    }
    
    render(){
      return(
          <div className="App-intro">   
            <h1>Data of Employee</h1>
            <table>
              <thead>
                <th>
                  <td>Id</td>
                  <td>Name</td>
                </th>
              </thead>
              <tbody>
                  {this.state.tabledata.map((employee,i) => 
                  <TableRow key={i} data={employee}></TableRow> ) }
              </tbody>
            </table>
          </div>
      );
    }
  }

  export default Content;