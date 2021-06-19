import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/userAuth'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
class  Login extends Component {
  state ={
    user:''
  }
  handelSubmit = () => {
    this.props.setAuthedUser(this.state.user)
    this.props.history.push(`/dashboard/${this.state.user}`) 
  }
  render(){
      const { userid } =this.props
      return (
    <div className="container">
   <form  className="box">
   <h3 className="header">Welcome to Would you Rather</h3>
   <FormControl variant="filled" className="menuitem">
        <InputLabel id="demo-simple-select-filled-label" >Choose User</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={this.state.user}
          onChange={(e)=> {this.setState({user:e.target.value})}}      
        >
         {
   userid.map(user =>( 
   <MenuItem  value={user[0]}  key={user[0]} className="menuitem"> <Avatar alt={user[1].name} src={user[1].avatarURL} />{user[1].name}</MenuItem>))
   }
         
        </Select>
      </FormControl>
 
   {console.log("herer here",this.state.user)}
   <Button type="submit" color="secondary"  onClick={this.handelSubmit}
   disabled={this.state.user===''}>Sign in</Button>
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
export default withRouter(connect(mapStateToProps, {setAuthedUser} )(Login));
