import React, { Component } from 'react'
import {connect} from 'react-redux'
class  Question extends Component {
  
  render(){
   return (
    <div className="App">
   <form>
       <h3>Asked by Sarah</h3>
       <h3>Would you rather...</h3>
       
   </form>
    
    </div>
  )}
}

export default connect()(Question);
