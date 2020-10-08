import React, {Component} from 'react';


export default class home extends Component{
  try = () => {
    //alert("ASwsdwD");
   this.props.history.push("/details/" + "213");
  
  };
  render(){
    return ( <div>
            <input type="text" id="txt" />
            <button onClick={this.try}> submit</button>
          </div>)
  }

}