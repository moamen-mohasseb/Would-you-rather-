import React, { Component } from 'react'
import {connect} from 'react-redux'
class  VotesResult extends Component {
  
  render(){
    console.log(this.props)
   return (
     <div className="container">
    <div className="mbox">
   <div><h2>{this.props.user.name} Ask this Question </h2></div>
   <div><h2>Results </h2></div>
   <div >
        <h3>1-{this.props.questionData.optionOne.text}?</h3>
        <h4>OK{this.props.userAuth}</h4>
        <h4>{(this.props.questionData.optionOne.votes.length/(this.props.questionData.optionTwo.votes.length+this.props.questionData.optionOne.votes.length))*100}</h4>
        <h3>2-{this.props.questionData.optionTwo.text}?</h3>
        <h4>{(this.props.questionData.optionTwo.votes.length/(this.props.questionData.optionTwo.votes.length+this.props.questionData.optionOne.votes.length))*100}</h4>
    </div>
    </div>
    </div>
   )
  }
}
  

function mapStateToProps({userAuth,questions , users },props)
{
  
  const { id } = props.match.params
  const UserData=users[questions[id].author]
 
      return{
        userAuth,
        id,
        questionData: questions[id],
        user:UserData
    }
}
export default connect(mapStateToProps)(VotesResult);
