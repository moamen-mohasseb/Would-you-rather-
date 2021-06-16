import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
class  Question extends Component {
  state={
    value:"optionOne"
  }
  handleChange = (event) => {
    this.setState({value:event.target.value});
    console.log("Radio Choice",this.state.value)
  };

  render(){
    console.log("here iam: ",this.props)
    const {questions,id}=this.props
   // console.log("user name:",users[questions[id][1].author)
   return (
    <div className="App">
    {
      <form >
      
        <div><h2>{questions[id].author} Ask this Question </h2></div>
        <div styles={"background-image : url(./images/1.png)"}>
        <h2>Would you Rather {id} </h2>
        <FormControl component="fieldset">
      <FormLabel component="legend">Would you Rather</FormLabel>
      <RadioGroup aria-label="Would you Rather" name="quesChoice" value={this.state.value} onChange={this.handleChange}>
        <FormControlLabel value="optionOne" control={<Radio />} label={questions[id].optionOne.text} />
        <FormControlLabel value="optionTwo" control={<Radio />} label={questions[id].optionTwo.text} />
        </RadioGroup>
    </FormControl>
                </div  >
        <Link className="Poll Button" to={`/answer/${id}`} value={id} > Answer Question</Link>
      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users, authedUser },props)
{
  const { id } = props.match.params
  //const UserData=users[questions[id].author]
  //const ansQuest=Object.entries(users[UserData.id].answers)
 
  //console.log("Answers:",questions[ansQuest[0][0]]
  //)
 
      return{
        
        id,
        questions,
        users:Object.entries(users)
        //ansQuest:questions[ansQuest[0][0]]
    }
}
export default withRouter(connect(mapStateToProps)(Question))
