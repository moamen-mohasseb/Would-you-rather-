import React, { Component } from 'react'
import {connect} from 'react-redux'
import Questionview from './QuestionView'

class  Dashboard extends Component {
  
  render(){
    console.log(this.props.questionid)
   return (
    <div className="App">
      {this.props.questionid.map(qid =>
      <div key={qid}>
    <Questionview id={qid}/>
    </div>
      )}
    
    </div>
  )}
}
function mapStateToProps({ questions })
{
      return{
        
        questionid: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Dashboard)
