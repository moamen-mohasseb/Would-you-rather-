import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'

class  VotesResult extends Component {
  
  render(){
    console.log(this.props)
   return (
     <div className="container">
    <div className="box">
   <div><h2>{this.props.user.name} Ask this Question </h2></div>
   <div><h2>Results </h2></div>
   <div >
        <h3>1-{this.props.questionData.optionOne.text}?</h3>
        <h4>OK{this.props.authedUser}</h4>
        <h4>{this.props.optionOnePercentage}</h4>
        <ProgressBar animated striped variant='success' now={this.props.optionOnePercentage} label={this.props.optionOnePercentage}/>
        <h4>{this.props.optionOne}</h4>
        <h3>2-{this.props.questionData.optionTwo.text}?</h3>
        <h4>{this.props.optionTwoPercentage}</h4>
        <ProgressBar now={this.props.optionTwoPercentage} />
        <h4>{this.props.optionTwo}</h4>
    </div>
    </div>
    </div>
   )
  }
}
  

function mapStateToProps({authedUser,questions , users },props)
{
  
  const { id } = props.match.params
  let UserData=''
  if(id)
  { UserData=users[questions[id].author]}
 
      return{
        authedUser,
        id,
        questionData: questions[id],
        user:UserData,
        optionOnePercentage:(questions[id].optionOne.votes.length/(questions[id].optionTwo.votes.length+questions[id].optionOne.votes.length))*100,
        optionTwoPercentage:(questions[id].optionTwo.votes.length/(questions[id].optionTwo.votes.length+questions[id].optionOne.votes.length))*100,
        optionOne:questions[id].optionOne.votes.includes(authedUser) ?"optionOne"
        : null,
        optionTwo:questions[id].optionTwo.votes.includes(authedUser) ?"optionTwo"
        : null
      }
}
export default withRouter(connect(mapStateToProps)(VotesResult));
