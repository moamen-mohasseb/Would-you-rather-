import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/shared'
import {Link,withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class  NewQuestion extends Component {
  state={
    optionOne:'',
    optionTwo:''
  }
  handleSubmit= (e) => {
    e.preventDefault()
     const { dispatch,authedUser } = this.props
    dispatch(handleSaveQuestion({
      author: authedUser,
      optionOneText:this.state.optionOne,
      optionTwoText: this.state.optionTwo
    }))
    this.props.history.push(`/dashboard`)
  }
  updateQuery = (query) => {
    if(query){
   this.setState(() => ({
    optionOne: query
   }))
  }else{this.setState({optionOne: ''})} 
}
updateQuery1 = (query) => {
  if(query){
 this.setState(() => ({
  optionTwo: query
 }))
}else{this.setState({optionTwo: ''})} 
}
    render(){
   return (
    <div className="container">
  
   <form onSubmit={this.handleSubmit}  className="box">
   <div >
     <h2 >Create New Questions</h2>
  
     <h3>Would you rather</h3>
   </div>
     <TextField
          id="1"
          label="Option one"
          placeholder="Question no1"
          helperText="first option"
          fullWidth
          required
          onChange={(event) => this.updateQuery(event.target.value)}
          margin="normal"
          variant="filled"
        />
     <br/>
     OR
     <br/>
     <TextField
          id="1"
          label="Option two"
          placeholder="Question no2"
          helperText="second option"
          fullWidth
          required
          onChange={(event) => this.updateQuery1(event.target.value)}
          margin="normal"
          variant="filled"
        />
     
     <br/>
     <Button type="submit" component={Link} to={`/dashboard}`} 
     disabled={this.state.optionOne==='' || this.state.optionTwo===''} color="secondary" onClick={this.handleSubmit} >Answer Question</Button>
  
    </form>
    
    </div>
  )}
}

function mapStateToProps({ questions , authedUser })
{
  
      return{
        questions,
      
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));