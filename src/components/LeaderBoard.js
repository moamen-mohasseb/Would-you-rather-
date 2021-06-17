import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card } from 'react-bootstrap'
import UserCard  from './UserCard'
//import image from '../../images'
class  LeaderBoard extends Component {
  
  render(){
   return (
     <div className="container">
       {this.props.usersboard.map(user =>
       <UserCard  userDetails={user} />
       )}
     </div>
   
)
}
}
function mapStateToProps({ users, authedUser })
{
  
  //const UserData=users[questions[id].author]
  const board =Object.entries(users).map((user) =>
    ({user,
      answersLength:Object.entries(user[1].answers).length,
      questionsLength:user[1].questions.length,
      score:Object.entries(user[1].answers).length+user[1].questions.length 
  })
  ) 
  console.log("board :",board.sort((a, b) => b.score-a.score ))
  //)
 
      return{
        
    //    id,
        
        usersboard:board.sort((a, b) => b.score-a.score )
        //ansQuest:questions[ansQuest[0][0]]
    }
}
export default connect(mapStateToProps)(LeaderBoard);
