import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter,Redirect} from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Image} from 'semantic-ui-react'



class  VotesResult extends Component {
  state={
    value:"optionOne",
  }
    
  render(){
const {questions,qid,authedUser,users}=this.props
console.log('Data we need',questions,qid,authedUser,users)

try{
  if(questions[qid]=== undefined)
  {   return(   <Redirect to="/question/wrong" />)
}
  const optionOneVotes=questions[qid].optionOne.votes.length
  const optionTwoVotes=questions[qid].optionTwo.votes.length
  const optionsSum=questions[qid].optionOne.votes.length+questions[qid].optionTwo.votes.length
  const optionOnePercentage=(questions[qid].optionOne.votes.length/(questions[qid].optionTwo.votes.length+questions[qid].optionOne.votes.length))*100
  const optionTwoPercentage=(questions[qid].optionTwo.votes.length/(questions[qid].optionTwo.votes.length+questions[qid].optionOne.votes.length))*100
  const optionOne=questions[qid].optionOne.votes.includes(authedUser) ?"optionOne" : null
  const optionTwo=questions[qid].optionTwo.votes.includes(authedUser) ?"optionTwo" : null
  const questionData= questions[qid]
  const user=users[questions[qid].author]
   return (
     <div className="container">
    <div className="box">
    <Image alt={user.name} src={user.avatarURL} className="imagesize" />
   <div ><h3>{user.name} Ask  </h3></div>
   <div><h2>Results </h2>
   <h4>Would you rather</h4></div>
   <div >
   <div className='cell'>
   <div>{optionOne? <p className='vote'>Your vote</p>: ''}</div>
        <h3>{questionData.optionOne.text}?</h3>
        
        <h4>{optionOnePercentage}%</h4>
        <ProgressBar animated striped variant='success' now={optionOnePercentage} label={optionOnePercentage}/>
        <div >number of votes {optionOneVotes}/ from {optionsSum}</div>
        </div>
        <div className='cell'>
        <div>{optionTwo ? <h4 className='vote'>Your vote</h4>: ''}</div>
        <h3>{questionData.optionTwo.text}?</h3>
        <h4>{optionTwoPercentage}%</h4>
        <ProgressBar animated striped variant='success' now={optionTwoPercentage} label={optionTwoPercentage}/>
        <div >votes {optionTwoVotes}/ out of {optionsSum}</div>

        </div>
        
    </div>
    </div>
    </div>
   )}
   catch(erre){
     return(
      <div>
      <Redirect to="/question/wrong" />
     </div>
    
     )
   }
  }
}
  

function mapStateToProps({authedUser,questions , users })
{
  
  try{
      return{
        authedUser,
        users,
        questions
    
        
      }
    }
    catch(err) {
      return {}
    }
}
export default withRouter(connect(mapStateToProps)(VotesResult));
