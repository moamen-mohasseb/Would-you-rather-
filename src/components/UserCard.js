import React, { Component } from 'react'
import {connect} from 'react-redux'
//import { Badge } from 'react-bootstrap'
import { Image, Grid, Segment} from 'semantic-ui-react'
//import Avatar from '@material-ui/core/Avatar';
class  VotesResult extends Component {

  render(){
    const {userDetails} = this.props
    console.log(userDetails)
   return (
    <div className="box">
   <Segment placeholder>
   <Grid columns={2} relaxed='very' stackable>
   <Grid.Column>
   
   <Image alt={userDetails.user[1].name} src={userDetails.user[1].avatarURL} className="imagesize" />
   
    <h3>   {userDetails.user[1].name}</h3>
    </Grid.Column>
    <Grid.Column>
           <div className="cell">Answered Questions: {userDetails.answersLength}</div>
            <div className="cell">Created Question: {userDetails.questionsLength}</div>
            <div className="score">Score: {userDetails.score}</div>
    
    </Grid.Column>
    </Grid>
    
    </Segment>
    </div>
  )}
}

export default connect()(VotesResult);
