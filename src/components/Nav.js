import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import {deleteAuthedUser} from '../actions/userAuth'
class  Nav extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.deleteAuthedUser();
  };
  render(){
    console.log("nav :",this.props)
   return (
    <div className="App">
             <div><Link to={`/dashboard/${this.props.authedUser}`} >Dashboard</Link></div>
             <div> <Link to="/newquestion" >Add new question</Link></div>
             <div> <Link to='/leaderboard' >Leaderboard</Link></div>
             <div> <Link exact to='/' >Log In</Link></div>
          {this.props.authedUser &&   <div>Welcome {this.props.authedUser}
             <Avatar alt={this.props.user.name} src={this.props.user.avatarURL} /> </div>
   }
   <div> <Link to="/" onClick={this.handleSubmit} >Log Out</Link></div>
            
    </div>
  )}
}
function mapStateToProps({ users, authedUser })
{
   // const s=Object.entries(users).filter(user => user[0]===authedUser)

      return{
        authedUser,
        user: users[authedUser]
       

    }
}

export default connect(mapStateToProps,{deleteAuthedUser})(Nav);
