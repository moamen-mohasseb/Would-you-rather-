import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Image} from 'semantic-ui-react'

class  QuestionView extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/results/${id}`)
  }
  render(){
   // console.log("here iam: ",this.props)
    const {answerd,qid}=this.props
    //console.log("answerd:",this.props.users[qid[1].author].avatarURL)
   return (
    <div >
    {
      <form className="formbox" >
      <Image alt={this.props.users[qid[1].author].name} src={this.props.users[qid[1].author].avatarURL} className="imagesize" />
        <div key={qid[1].id}><h3 className="header">{qid[1].author} Ask  </h3></div>
        <div >
        <h2>Would you Rather </h2>
        <h3>{qid[1].optionOne.text}?</h3>
        <h3>_____________Or______________</h3>
        <h3>{qid[1].optionTwo.text}?</h3>
        </div  >
        {answerd==="true" ? <Button type="submit" component={Link} to={`/results/${qid[1].id}`} color="secondary"  >View Poll</Button>
         : <Button type="submit" component={Link} to={`/answer/${qid[1].id}`} color="secondary"  >Answer Question</Button>}
      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users, authedUser })
{
 // const UserData=users[authedUser]
  //const ansQuest=Object.entries(users[UserData.id].answers)
 
  //console.log("Answers:",questions[ansQuest[0][0]]
  //)
 // console.log("important",UserData)
 
      return{
        
    //    id,
        questions:Object.entries(questions),
        users
        //ansQuest:questions[ansQuest[0][0]]
    }
}
export default withRouter(connect(mapStateToProps)(QuestionView))
