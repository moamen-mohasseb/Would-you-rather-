import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import VotesResults from './VotesResult'
import LeaderBoard from './LeaderBoard'
import Nav from "./Nav"
import { BrowserRouter as Router, Redirect, Route ,Switch} from 'react-router-dom'
import NewQuestion from './NewQuestion'
import Question from './AnswerQuestion'
import '../app.css'
import {Header } from 'semantic-ui-react';
class  App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())

  }
  render(){
   console.log("WOOOOOW",this.props)
   return (
     <Router>
    <div className="App">
    <LoadingBar />
    {        this.props.authedUser==='' ?
            <div>
              <Redirect to='/login'/>
             <Route exact path='/'  component={Login} />
             <Route exact path='/login'  component={Login} />
             </div>
             : 
             <div>
              <Nav/>
              <Switch>
             <Route path={`/dashboard/${this.props.authedUser}`}  component={Dashboard} />
             <Route path='/results/:id'  component={VotesResults} />
             <Route  path='/leaderboard'  component={LeaderBoard} />
             <Route  path='/add'  component={NewQuestion} />
             <Route  path='/answer/:id'  component={Question} />
             <Route render={()=> <Header as="h3">No Match 404 Error</Header>} />
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
