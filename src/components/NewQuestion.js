import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/users'
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
    <div className="App">
   <div>
     <h2>Create New Questions</h2>
   </div>
   <div>
     <h3>Complete Question</h3>
     <h3>Would you rather</h3>
   </div>
   <form onSubmit={this.handleSubmit}>
     <textarea placeholder="Question no1 " onChange={(event) => this.updateQuery(event.target.value)} maxLength={500}/>
     <br/>
     OR
     <br/>
     <textarea  onChange={(event) => this.updateQuery1(event.target.value)} placeholder="Question No2" maxLength={500}/>
     <br/>
     <button type="submit" >Submit
              </button>

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