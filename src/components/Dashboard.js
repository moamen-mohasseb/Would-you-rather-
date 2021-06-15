import React, { Component } from 'react'
import {connect} from 'react-redux'
import Questionview from './QuestionView'
import {Tab,Tabs,AppBar} from '@material-ui/core';


//const { children, value, index, ...other } = props

class  Dashboard extends Component {
  state={
    value:0
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue})
    console.log("value:",this.state.value,"|new",newValue)
  }
   
  render(){
    const {value}=this.state

    console.log("dddd",value)
   return (
     <>
     <AppBar position="relative">
    <Tabs value={value} onChange={this.handleChange} >
          <Tab label="Answerd Questions"  />
          <Tab label="Un Answerd Questions" />
     </Tabs>
     </AppBar>
     {value===0 && this.props.questionid.map(qid =>
      <div>
    <Questionview id={qid}/>
    </div>
      )}
      {value===1 && console.log("value:",value)}
   </>
  )}
}
function mapStateToProps({ questions , users, authedUser })
{
    const questionUser=Object.entries(questions).filter(q => q[1].optionOne.votes.includes(authedUser)||q[1].optionTwo.votes.includes(authedUser))
    //const ansQuest=Object.entries(users[questionUser.id].answers)
    console.log("questionUser",questionUser)
      return{
        
        questionid: Object.keys(questions)
        

    }
}

export default connect(mapStateToProps)(Dashboard)
