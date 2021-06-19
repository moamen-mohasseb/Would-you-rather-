import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter,Route,Redirect} from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Header } from 'semantic-ui-react';
import Login from './Login'
import { Image} from 'semantic-ui-react'



class  VotesResult extends Component {
  state={
    value:"optionOne",
  }
    
  render(){
    console.log('Data we need',this.props)
const {user}=this.props
    try{
   return (
     <div className="container">
    <div className="box">
    <Image alt={user.name} src={user.avatarURL} className="imagesize" />
   <div class='center'><h3>{this.props.user.name} Ask  </h3></div>
   <div><h2>Results </h2></div>
   <div >
   <div className='cell'>
   <h4>{this.props.optionOne? <h4 className='vote'>Your vote</h4>: ''}</h4>
        <h3>{this.props.questionData.optionOne.text}?</h3>
        
        <h4>{this.props.optionOnePercentage}%</h4>
        <ProgressBar animated striped variant='success' now={this.props.optionOnePercentage} label={this.props.optionOnePercentage}/>
        <div >number of votes {this.props.optionOneVotes}/ from {this.props.optionsSum}</div>
        </div>
        <div className='cell'>
        <h4>{this.props.optionTwo ? <h4 className='vote'>Your vote</h4>: ''}</h4>
        <h3>{this.props.questionData.optionTwo.text}?</h3>
        <h4>{this.props.optionTwoPercentage}%</h4>
        <ProgressBar animated striped variant='success' now={this.props.optionTwoPercentage} label={this.props.optionTwoPercentage}/>
        <div >votes {this.props.optionTwoVotes}/ out of {this.props.optionsSum}</div>

        </div>
        
    </div>
    </div>
    </div>
   )}
   catch(erre){
     return(
      <div>
      <Route render={()=> <Header as="h3">No Match 404 Error</Header>} />
      <Redirect to='/login' component={Login}/>
    
     <Route exact path='/login'  component={Login} />
     </div>
    
     )
   }
  }
}
  

function mapStateToProps({authedUser,questions , users },props)
{
  
  try{
    const { id } = props.match.params
  //let UserData=''
 const UserData=users[questions[id].author]
 
      return{
        authedUser,
        id,
        questionData: questions[id],
        user:UserData,
        optionOneVotes:questions[id].optionOne.votes.length,
        optionTwoVotes:questions[id].optionTwo.votes.length,
        optionsSum:questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length,
        optionOnePercentage:(questions[id].optionOne.votes.length/(questions[id].optionTwo.votes.length+questions[id].optionOne.votes.length))*100,
        optionTwoPercentage:(questions[id].optionTwo.votes.length/(questions[id].optionTwo.votes.length+questions[id].optionOne.votes.length))*100,
        optionOne:questions[id].optionOne.votes.includes(authedUser) ?"optionOne"
        : null,
        optionTwo:questions[id].optionTwo.votes.includes(authedUser) ?"optionTwo"
        : null
      }
    }
    catch(err) {
      return {}
    }
}
export default withRouter(connect(mapStateToProps)(VotesResult));
