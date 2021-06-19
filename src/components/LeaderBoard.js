import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserCard  from './UserCard'
class  LeaderBoard extends Component {
  
  render(){
   return (
     <div className="container">
       {this.props.usersboard.map(user =>
       <UserCard key={user.user[0]} userDetails={user} />
       
       )}
     </div>
   
)
}
}
function mapStateToProps({ users, authedUser })
{
  const board =Object.entries(users).map((user) =>
    ({user,
      answersLength:Object.entries(user[1].answers).length,
      questionsLength:user[1].questions.length,
      score:Object.entries(user[1].answers).length+user[1].questions.length 
  })
  ) 
      return{
        usersboard:board.sort((a, b) => b.score-a.score )
    }
}
export default connect(mapStateToProps)(LeaderBoard);
