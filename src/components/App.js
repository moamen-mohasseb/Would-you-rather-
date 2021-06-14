import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import VotesResults from './VotesResult'
import LeaderBoard from './LeaderBoard'
import Nav from "./Nav"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewQuestion from './NewQuestion'
class  App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())

  }
  render(){
   console.log(this.props)
   return (
     <Router>
    <div className="App">
    <Nav />
    <LoadingBar />
    {this.props.loading === true
          ? null
          :<div>
             <Route exact path='/'  component={Login} />
             <Route path='/dashboard/:id'  component={Dashboard} />
             <Route path='/results/:id'  component={VotesResults} />
             <Route  path='/leaderboard'  component={LeaderBoard} />
             <Route  path='/newquestion'  component={NewQuestion} />
           </div>
    }
    </div>
    </Router>
  )}
}
function mapStateToProps({ questions },{id})
{
 
      return{
        
        id,
        questionData: questions[id],
        
    }
}

export default connect(mapStateToProps)(App);
