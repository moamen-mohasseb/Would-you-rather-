import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/shared'
import {Link,withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
class  NewQuestion extends Component {
  state={
    optionOne:'',
    optionTwo:''
  }
  handleSubmit= (e) => {
    e.preventDefault()
  console.log("new quest: ",this.props)
  console.log("new quest State: ",this.state)
    const { dispatch,authedUser } = this.props
   
    dispatch(handleSaveQuestion({
      author: authedUser,
      optionOne:this.state.optionOne,
      optionTwo: this.state.optionTwo
    }))
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
     <h2>Create New Questions</h2>
  
     <h3>Complete Question</h3>
     <h3>Would you rather</h3>
   </div>
     <textarea placeholder="Question no1 " onChange={(event) => this.updateQuery(event.target.value)} maxLength={500}/>
     <br/>
     OR
     <br/>
     <textarea  onChange={(event) => this.updateQuery1(event.target.value)} placeholder="Question No2" maxLength={500}/>
     <br/>
     <Button type="submit" component={Link} to={`/dashboard/${this.props.authedUser}`} color="secondary" onClick={this.handleSubmit} >Answer Question</Button>

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

export default connect(mapStateToProps)(NewQuestion);