import React, { Component } from 'react';
import { Container, Divider, Grid, List, Header, Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'
import GroupForumModal from '../containers/GroupForumModal'

class GroupShowPage extends Component {
  constructor(){
    super()
      this.state= {

    }
  }

//need to make a decision if going to put a search bar yet
  // handleSearchChange = (e, { value }) => {
  //   console.log('searching')
  //   this.setState({ searchTerm: value })
  // }

  componentDidMount = () = {
    
  }

  render() {
    return (
      <Grid celled>

          <Grid.Row>
            Family Members Listed in Group
          </Grid.Row>

          <Grid.Row>
              <Grid.Column floated="right" width={8}>

              </Grid.Column>

              <Grid.Column floated="left" width={8}>

              </Grid.Column>
          </Grid.Row>









        <Grid.Column floated="right" width={6}>
          
      	</Grid.Column>


        <Grid.Row>
          <Grid.Column> </Grid.Column>
        </Grid.Row>
      </Grid>

    );
  }
}

export default GroupShowPage;
