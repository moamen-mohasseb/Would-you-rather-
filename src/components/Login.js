import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {setAuthedUser} from '../actions/userAuth'

class  Login extends Component {
  state ={
    user:'sarahedo'
  }
 
  handelSubmit = () => {
    console.log("handler:",this.state.user)
    this.props.setAuthedUser(this.state.user)
  }
  
  
  
  render(){
      console.log("users:",this.props.userid)
      const { userid } =this.props
      console.log("users Id:",userid.length)
     // const userR=this.selectedValue
      return (
    <div className="container">
   Login
   <h3 className="header">Welcome to Would you Rather</h3>

   <form >
   <select  onChange={(e)=> {this.setState({user:e.target.value} )
   console.log("herer here1",this.state.user)}}>
   <LoadingBar />
    
   {
   userid.map(user =>(
       <option value={user[0]}  key={user[0]} title="https://tylermcginnis.com/would-you-rather/sarah.jpg" >
      {user[1].name}
       </option>
) )}
   </select>
   {console.log("herer here",this.state.user)}
   <Button type="submit" component={Link} to={`/dashboard/${this.state.user}`} color="secondary"  onClick={this.handelSubmit}>Sign in</Button>
   </form>
    </div>
  )}
}
function mapStateToProps({ users ,authedUser})
{
      return{
        
        userid: Object.entries(users),
        authedUser
        
    }
}
export default connect(mapStateToProps, {setAuthedUser} )(Login);
