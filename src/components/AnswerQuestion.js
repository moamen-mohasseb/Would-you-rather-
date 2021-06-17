import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {handleSaveAnswer} from '../actions/questions'
class  AnswerQuestion extends Component {
  state={
    value:"optionOne"
  }
  handleChange = (event) => {
    this.setState({value:event.target.value});
    console.log("Radio Choice",this.state.value)
  };
  handleSaveAnswer = (e) => {
    e.preventDefault()
  
    const { dispatch,authedUser,id } = this.props
   
    dispatch(handleSaveAnswer({
      authedUser: authedUser,
      qid:id,
      answer: this.state.value
    }))
  }
  render(){
    console.log("here iam: ",this.props)
    const {questions,id}=this.props
   return (
    <div className="container">
    {
      <form >
      
        <div><h2>{questions[id].author} Ask this Question </h2></div>
        <div styles={"background-image : url(./images/1.png)"}>
        <h2>Would you Rather {id} </h2>
        <FormControl component="fieldset">
      <FormLabel component="legend">Would you Rather</FormLabel>
      <RadioGroup aria-label="Would you Rather" name="quesChoice" value={this.state.value} onChange={this.handleChange}>
        <FormControlLabel value='optionOne' control={<Radio />} label={questions[id].optionOne.text} />
        <FormControlLabel value='optionTwo' control={<Radio />} label={questions[id].optionTwo.text} />
        </RadioGroup>
      </FormControl>
                </div  >
        <Button type="submit" component={Link} to={`/answer/${id}`} color="secondary" onClick={this.handleSaveAnswer} >Answer Question</Button>
      </form>
    }
    </div>)
  }
}
function mapStateToProps({ questions , users, authedUser },props)
{
  const { id } = props.match.params
      return{
        
        id,
        questions,
        users:Object.entries(users),
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(AnswerQuestion))
