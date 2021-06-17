import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {setAuthedUser} from '../actions/userAuth'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';




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
  
   

   <form  className="box">
   <h3 className="header">Welcome to Would you Rather</h3>
   <FormControl variant="filled" className="menuitem">
        <InputLabel id="demo-simple-select-filled-label" >Choose User</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={this.state.value}
          onChange={(e)=> {this.setState({user:e.target.value})}}      
        >
         {
   userid.map(user =>( 
   <MenuItem  value={user[0]}  key={user[0]} className="menuitem"> <Avatar alt={user[1].name} src={user[1].avatarURL} />{user[1].name}</MenuItem>))
   }
         
        </Select>
      </FormControl>
 
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
