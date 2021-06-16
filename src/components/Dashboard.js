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
     {value===0 && this.props.answerdQuestion.map(qid =>
      <div>

    <Questionview answerd="true" key={qid.id} qid={qid}/>
    </div>
      )}
           {value===1 && this.props.unAnswerdQuestion.map(qid =>
      <div>
    <Questionview answerd="false" key={qid.id} qid={qid}/>
    </div>
      )}
   </>
  )}
}
function mapStateToProps({ questions , users, authedUser })
{
    const answerdQuestion=Object.entries(questions).filter(q => q[1].optionOne.votes.includes(authedUser)||q[1].optionTwo.votes.includes(authedUser))
    const unAnswerdQuestion=Object.entries(questions).filter(q => !q[1].optionOne.votes.includes(authedUser) && !q[1].optionTwo.votes.includes(authedUser))
    
    //const ansQuest=Object.entries(users[questionUser.id].answers)
    console.log("answerdQuestion",answerdQuestion)
    console.log("UNanswerdQuestion",unAnswerdQuestion)

      return{
        
        questionid: Object.keys(questions),
        answerdQuestion: answerdQuestion,
        unAnswerdQuestion: unAnswerdQuestion

    }
}

export default connect(mapStateToProps)(Dashboard)
