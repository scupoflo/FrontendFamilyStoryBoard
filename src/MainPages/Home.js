import React, { Component } from 'react';
import {Grid, Reveal } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Link} from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import { Header, Icon, Image } from 'semantic-ui-react'

class Home extends Component {
  constructor(){
    super()
      this.state= {
      allGroups: [],
      selectedCard:{}
    }
  }

 


  render() {
    return ( 
  <Grid>    
    <Grid.Row centered>
    <Header as='div' id="background" icon textAlign='center'>
    
    <Header.Content>My Family Tree!!</Header.Content>
    
    
    </Header>
      
    </Grid.Row>

      <Grid.Row>
        <Grid columns='equal'>
          <Grid.Column>
            
            <GroupList 
              allGroups={this.props.allGroups}
              handleClick= {this.props.handleClick}
              groupObj={this.props.groupObj}
              members={this.props.members}
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

