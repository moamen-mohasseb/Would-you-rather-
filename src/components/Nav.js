import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class  Nav extends Component {
  
  render(){
   return (
    <div className="App">
             <div><Link to={`/dashboard/${this.props.authedUser}`} >Dashboard</Link></div>
             <div> <Link to="/newquestion" >Add new question</Link></div>
             <div> <Link to='/leaderboard' >Leaderboard</Link></div>
             <div> <Link exact to='/' >Log In</Link></div>
             <div>Welcome {this.props.authedUser} </div>
            
    </div>
  )}
}
function mapStateToProps({ authedUser })
{
      return{
        
        authedUser
        
    }
}

export default connect(mapStateToProps)(Nav);
