import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import VotesResults from './VotesResult'
import LeaderBoard from './LeaderBoard'
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
    starter code
    <LoadingBar />
    {this.props.loading === true
          ? null
          :<div>
             <Route path='/' exact component={Login} />
             <Route path='/dashboard' exact component={Dashboard} />
             <Route path='/results/:id'  component={VotesResults} />
             <Route  path='/leaderboard' exact component={LeaderBoard} />
             <Route  path='/newquestion' exact component={NewQuestion} />
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
