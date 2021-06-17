import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
class  Nav extends Component {
  
  render(){
    console.log("nav :",this.props)
   return (
    <div className="App">
             <div><Link to={`/dashboard/${this.props.authedUser}`} >Dashboard</Link></div>
             <div> <Link to="/newquestion" >Add new question</Link></div>
             <div> <Link to='/leaderboard' >Leaderboard</Link></div>
             <div> <Link exact to='/' >Log In</Link></div>

            
    </div>
  )}
}
function mapStateToProps({ questions , users, authedUser })
{
    const s=Object.entries(users).filter(user => user[0]===authedUser)

      return{
        authedUser,
        user: s
       

    }
}

export default connect(mapStateToProps)(Nav);
