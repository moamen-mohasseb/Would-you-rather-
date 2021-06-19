import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import {deleteAuthedUser} from '../actions/userAuth'
class  Nav extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.deleteAuthedUser();
   // this.props.history.push('/login')
  };
  render(){
    console.log("nav :",this.props)
   return (
    <AppBar
    position="static"
    color="default"
    
  >
    <Toolbar className='navigationbar'>
      <Box className='item' >
      <ListItem button>
      <Link to={`/dashboard`} >Home</Link>
      </ListItem>
      </Box>
      <Box className='item' >
      <ListItem button>
      <Link to="/add" >Add new question</Link>
      </ListItem>
      </Box>
      <Box className='item' >
      <ListItem button>
      <Link to='/leaderboard' >Leaderboard</Link>
      </ListItem>
      </Box>
      <Box className='item' >
        <ListItem button>
          <ListItemAvatar>
            <div>
          {this.props.authedUser &&  
             <Avatar alt={this.props.user.name} src={this.props.user.avatarURL} className="imagesize" /> 
   }
   </div>
          </ListItemAvatar>
          <ListItemText primary={this.props.authedUser} />
        </ListItem>
        <Button
          onClick={this.handleSubmit}
          color="secondary"
                    
        >
          LogOut
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
    
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

export default withRouter(connect(mapStateToProps,{deleteAuthedUser})(Nav));
