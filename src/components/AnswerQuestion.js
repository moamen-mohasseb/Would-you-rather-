import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter,Route,Redirect} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {handleSaveAnswer} from '../actions/shared'
import {Header } from 'semantic-ui-react';
import Login from './Login'
class  AnswerQuestion extends Component {
  state={
    value:"optionOne",
    hasError:false
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
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
    this.props.history.push(`/answer/${id}`)
  }
  render(){
  //  console.log("here iam: ",this.props)
  try{
    const {questions,id}=this.props
   return (
    <div  className="container">
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
        <Button type="submit" component={Link} to={`/dashboard/${this.props.authedUser}`} color="secondary" onClick={this.handleSaveAnswer} >Answer Question</Button>
       

      </form>
    }
    </div>)
  }
  catch(erre){
    return(
     <div>
     <Route render={()=> <Header as="h3">No Match 404 Error</Header>} />
     <Redirect to='/login'/>
    <Route exact path='/'  component={Login} />
    <Route exact path='/login'  component={Login} />
    </div>
   
    )
  }
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
