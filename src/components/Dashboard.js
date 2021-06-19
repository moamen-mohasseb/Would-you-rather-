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
     <div className="container">
     <div >
     <AppBar position="relative"  >
    <Tabs key="5" value={value} onChange={this.handleChange} >
          <Tab key="1" label={`UNANSWERD QUESTIONS ${this.props.unAnswerdQuestion.length}`}  />
          <Tab key="2" label={`ANSWERD QUESTIONS ${this.props.answerdQuestion.length}`} />
     </Tabs>
     </AppBar>
     {value===1 && this.props.answerdQuestion.map(qid =>
      <div key={qid.id}>

    <Questionview answerd="true" key={qid.id} qid={qid}/>
    </div>
      )}
           {value===0 && this.props.unAnswerdQuestion.map(qid =>
      <div key={qid.id}>
    <Questionview answerd="false" key={qid.id} qid={qid}/>
    </div>
      )}
  </div>
  </div>
  )}
}
function mapStateToProps({ questions , users, authedUser })
{
    const answerdQuestion=Object.entries(questions).filter(q => q[1].optionOne.votes.includes(authedUser)||q[1].optionTwo.votes.includes(authedUser))
    const unAnswerdQuestion=Object.entries(questions).filter(q => !q[1].optionOne.votes.includes(authedUser) && !q[1].optionTwo.votes.includes(authedUser))
            return{
        
        questionid: Object.keys(questions),
        answerdQuestion: answerdQuestion.sort((a, b) => b[1].timestamp - a[1].timestamp),
        unAnswerdQuestion: unAnswerdQuestion.sort((a, b) => b[1].timestamp - a[1].timestamp)

    }
}

export default connect(mapStateToProps)(Dashboard)
