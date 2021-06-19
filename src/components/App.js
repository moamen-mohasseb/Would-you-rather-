import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Nav from "./Nav"
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import NewQuestion from './NewQuestion'
import Question from './AnswerQuestion'
import PageNotFound from './404page'
import '../app.css'
class  App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())

  }
  render(){
   return (
     <Router>
    <div className="App">
    <LoadingBar />
    {        this.props.authedUser==='' ?
            <div>
               <Route
              render={() => (
                  <Login />
              )}/>
             </div>
             : 
             <div>
              <Nav/>
              <Switch>
              <Route exact path='/'  component={Dashboard} />
              <Route path="/question/wrong" component={PageNotFound} />
             <Route path={`/dashboard/`}  component={Dashboard} />
             <Route  path='/leaderboard'  component={LeaderBoard} />
             <Route  path='/add'  component={NewQuestion} />
             <Route  path='/question/:id'  component={Question} />
             <Route component={PageNotFound} />
             </Switch>
           </div>
    }
    </div>
    </Router>
  )}
}
function mapStateToProps({ authedUser })
{
 
      return{
        
        authedUser
    }
}

export default connect(mapStateToProps)(App);
