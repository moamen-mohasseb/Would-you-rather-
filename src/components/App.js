import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
class  App extends Component {
  componentDidCatch(){
    this.props.dispatch(handleInitialData())
    
  }
  render(){
   return (
    <div className="App">
    starter code
    
    </div>
  )}
}

export default connect()(App);
