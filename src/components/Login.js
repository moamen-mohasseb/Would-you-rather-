import React, { Component } from 'react'
import {connect} from 'react-redux'
class  Login extends Component {
  
  render(){
      console.log("users:",this.props.userid)
      const { userid } =this.props
   return (
    <div className="App">
   Login
   <h3>Welcome to</h3>
   <form>
   <h4>Would you Rather</h4>
   {userid.length/*.map(user =>
       <option value={user.id} styles={"background-image : url(./images/1.png)"}>{user.name}</option>
   )*/}
   <select>
       
   </select>
   <button type='submit' >Sign in</button>
   </form>
    </div>
  )}
}
function mapStateToProps({ users })
{
   // console.log("Here I Am",users)
    return{
        
        userid: Object.assign({},users)
    }
}
export default connect(mapStateToProps)(Login);
