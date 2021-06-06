import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
class  App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())

  }
  render(){
   // console.log(this.props)
   return (
    <div className="App">
    starter code
    <LoadingBar />
    {this.props.loading === true
          ? null
          : <Login />}
    </div>
  )}
}

export default connect()(App);
