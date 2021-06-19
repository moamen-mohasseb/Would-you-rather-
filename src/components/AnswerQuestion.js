import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter,Redirect} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {handleSaveAnswer} from '../actions/shared'
import { Image} from 'semantic-ui-react'
import VotesResults from './VotesResult'




class  AnswerQuestion extends Component {
  state={
    value:"optionOne",
    hasError:false
  }
  
  handleChange = (event) => {
    this.setState({value:event.target.value});
    
  };
  handleSubmit= (e) => {
    e.preventDefault()
  
    const { dispatch,authedUser,id } = this.props
   
    dispatch(handleSaveAnswer({
      authedUser: authedUser,
      qid:id,
      answer: this.state.value
    }))
  
    this.props.history.push(`/question/${id}`)
  }
  render(){
  
  try{
    const {questions,id,user,answerd}=this.props
    if(questions[id]===undefined)
    {
      <Redirect to="/question/wrong" />
    }
    console.log('answer flag:',answerd)
    if(answerd){
   return (
    <div  className="container">
    {
      <form onSubmit={this.handleSubmit}>
        <Image alt={user.name} src={user.avatarURL} className="imagesize" />
        <div><h2>{user.name} Ask </h2></div>
        <h2>Would you Rather </h2>
        <FormControl component="fieldset">
      <FormLabel component="legend">Would you Rather</FormLabel>
      <RadioGroup aria-label="Would you Rather" name="quesChoice" value={this.state.value} onChange={this.handleChange}>
        <FormControlLabel value='optionOne' control={<Radio />} label={questions[id].optionOne.text} />
        <FormControlLabel value='optionTwo' control={<Radio />} label={questions[id].optionTwo.text} />
        </RadioGroup>
        <Button type="submit" component={Link} to={`/question/${questions[id]}`} color="secondary" onClick={this.handleSubmit} >Answer Question</Button>
      </FormControl>
        
       </form>
    }
    </div>)}
    else{
      return(<VotesResults qid={id} />)
    }
    
  }

  catch(erre){
    return(
     <div>
      <Redirect to="/question/wrong" />
    </div>
   
    )
  }
}
}


function mapStateToProps({ questions , users, authedUser },props)
{
  const { id } = props.match.params
  try{
    console.log("answer glag,",(questions[id].optionOne.votes.includes(authedUser)||
    questions[id].optionTwo.votes.includes(authedUser))?false :true)
      return{
        
        id,
        questions,
        user:users[questions[id].author],
        users:Object.entries(users),
        authedUser,
        answerd:(questions[id].optionOne.votes.includes(authedUser)||
        questions[id].optionTwo.votes.includes(authedUser))?false :true
    }
  }
  catch(err){
    return {}
  }
}
export default withRouter(connect(mapStateToProps)(AnswerQuestion))
