import React, { Component } from 'react'
import {connect} from 'react-redux'
import Questionview from './Questionview'

class  Dashboard extends Component {
  
  render(){
   return (
    <div className="App">
    <Questionview />
    
    </div>
  )}
}

export default connect()(Dashboard);
