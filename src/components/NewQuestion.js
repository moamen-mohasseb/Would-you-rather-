import React, { Component } from 'react'
import {connect} from 'react-redux'
class  NewQuestion extends Component {
  
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
     <textarea value="question1" onChange={this.handleChange} placeholder="Question No1" maxLength={280}/>
     <br/>
     OR
     <br/>
     <textarea  onChange={this.handleChange} placeholder="Question No2" maxLength={280}/>
     <br/>
     <button type="submit" >Submit
              </button>

    </form>
    
    </div>
  )}
}

export default connect()(NewQuestion);