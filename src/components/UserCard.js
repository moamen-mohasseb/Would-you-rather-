import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card, } from 'react-bootstrap'
import { Image, Divider, Form, Grid, Segment} from 'semantic-ui-react'
class  VotesResult extends Component {

  render(){
    const {userDetails} = this.props
    console.log(userDetails)
   return (
    <div className="box">
   <Segment placeholder>
   <Grid columns={2} relaxed='very' stackable>
   <Grid.Column>
    <Image src={userDetails.user[1].avatarURL} size='tiny' verticalAlign='middle' className="imagesize" />
    <Divider />
    </Grid.Column>
    <Grid.Column>
           <div className="cell">Answered Questions: {userDetails.answersLength}</div>
            <div className="cell">Created Question: {userDetails.questionsLength}</div>
            <div className="cell">Score: {userDetails.score}</div>
    
    </Grid.Column>
    </Grid>
    </Segment>
    
    </div>
  )}
}

export default connect()(VotesResult);
