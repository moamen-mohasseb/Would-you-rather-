import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
class  QuestionView extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/results/${id}`)
  }
  render(){
    console.log("here iam: ",this.props)
    const {qid,questions,users}=this.props
   // console.log("user name:",users[questions[id][1].author)
   return (
    <div className="App">
    {
      <form >
      
        <div><h2>{users.filter(user => user.id===qid.author).name} Ask this Question </h2></div>
        <div styles={"background-image : url(./images/1.png)"}>
        <h2>Would you Rather {qid.id} </h2>
        <h3>1-{qid.optionOne.text}?</h3>
        <h3>Or</h3>
        <h3>2-{qid.optionTwo.text}?</h3>
        </div  >
        <Link className="Poll Button" to={`/results/${qid  }`} value={qid} > View Poll</Link>
      
      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users, authedUser })
{
  //const UserData=users[questions[id].author]
  //const ansQuest=Object.entries(users[UserData.id].answers)
 
  //console.log("Answers:",questions[ansQuest[0][0]]
  //)
 
      return{
        
    //    id,
        questions:Object.entries(questions),
        users:Object.entries(users)
        //ansQuest:questions[ansQuest[0][0]]
    }
}
export default withRouter(connect(mapStateToProps)(QuestionView))
