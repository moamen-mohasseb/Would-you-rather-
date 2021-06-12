import React, { Component } from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
class  Login extends Component {
  handelSubmit = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/results/${id}`)
  }
  
  render(){
      console.log("users:",this.props.userid)
      const { userid } =this.props
      console.log("users Id:",userid.length)
   return (
    <div className="App">
   Login
   <h3>Welcome to</h3>

   <form>
   <h4>Would you Rather</h4>
   <select>
   <LoadingBar />
   {userid.map(user =>(
       <option value={user[0]}  key={user[0]} title="https://tylermcginnis.com/would-you-rather/sarah.jpg" >
       
      {user[1].name}
       </option>
     
   ) )}
         
   </select>
   
   <button type='submit' >Sign in</button>
   </form>
    </div>
  )}
}
function mapStateToProps({ users })
{
      return{
        
        userid: Object.entries(users)
    }
}
export default connect(mapStateToProps)(Login);
