import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
class  QuestionView extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/results/${id}`)
  }
  render(){
    console.log(this.props)
    
   return (
    <div className="App">
    {
      <form >
      
        <div><h2>{this.props.user.name} Ask this Question </h2></div>
        <div styles={"background-image : url(./images/1.png)"}>
        <h2>Would you Rather </h2>
        <h3>1-{this.props.questionData.optionOne.text}?</h3>
        <h3>Or</h3>
        <h3>2-{this.props.questionData.optionTwo.text}?</h3>
        </div  >
        <Link className="Poll Button" to={`/results/${this.props.questionData.id  }`} value={this.props.questionData.id} > View Poll</Link>

      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users, authedUser },{id})
{
  const UserData=users[questions[id].author]
  const ansQuest=Object.entries(users[UserData.id].answers)
 
  console.log("Answers:",questions[ansQuest[0][0]]
  )
 
      return{
        
        id,
        questionData: questions[id],
        user:UserData,
        ansQuest:questions[ansQuest[0][0]]
    }
}
export default withRouter(connect(mapStateToProps)(QuestionView))
