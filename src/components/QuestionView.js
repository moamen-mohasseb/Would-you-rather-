import React, { Component } from 'react'
import {connect} from 'react-redux'
class  QuestionView extends Component {
  
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
        <button className="Poll Button" value={this.props.questionData.id} >view poll</button>

      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users },{id})
{
  const UserData=users[questions[id].author]
 
      return{
        
        id,
        questionData: questions[id],
        user:UserData
    }
}
export default connect(mapStateToProps)(QuestionView);
