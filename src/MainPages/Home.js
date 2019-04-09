import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'

class Home extends Component {
  constructor(){
    super()
      this.state= {
      allGroups: [],
      selectedCard:{}
    }
  }

  handleClick = (groupObj) => {
    console.log(groupObj)
    this.setState({selectedCard: groupObj})
  }


  render() {
    return ( 
  <Grid>    
    <Grid.Row centered>
      <h1> My Family Tree!! </h1>
    </Grid.Row>

      <Grid.Row>
        <Grid columns='equal'>
          <Grid.Column>
            <GroupList 
              allGroups={this.props.allGroups}
              handleClick= {this.handleClick}
             />
          </Grid.Column>
            <Grid.Row>
              <Segment compact>
                <Link to= "/editHome">
                <Button inverted color='purple'>
                  Edit Family Tree
                </Button>
                </Link>
              </Segment>
            </Grid.Row>
        </Grid>
      </Grid.Row>
  </Grid>
    );
  }
}

export default Home;

