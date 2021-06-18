import React, { Component } from 'react'
import {connect} from 'react-redux'
//import { Badge } from 'react-bootstrap'
import { Image, Grid, Segment} from 'semantic-ui-react'
//import {Image} from '@material-ui/core';
class  VotesResult extends Component {

  render(){
    const {userDetails} = this.props
    console.log(userDetails)
   return (
    <div>
   
   <Grid columns={3} divided>
   <Grid.Row>
   <Grid.Column>
   <div>
   <img alt={userDetails.user[1].name} src={userDetails.user[1].avatarURL} className='imagesize' />   
    <h3>   {userDetails.user[1].name}</h3>
    </div>
    </Grid.Column>
    <Grid.Column>
         <div >Answered Questions: {userDetails.answersLength}</div>
    
          <div> Created Question: {userDetails.questionsLength}</div>  
    
    </Grid.Column>
    <Grid.Column>
    <div className="score">Score: 
            {userDetails.score}</div>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    
    </div>
  )}
}

export default connect()(VotesResult);
