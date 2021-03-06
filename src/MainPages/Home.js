import React, { Component } from 'react';
import {Grid } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Link} from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import Facebook from '../facebook'

class Home extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column floated="left" width={9} className="welcome">
          <h1 className="welcome">Welcome to Family StoryBoard!</h1>
          <h3 className="welcome">Where the Apple Doesn't Fall Far From the Tree </h3>
        </Grid.Column>

        <Grid.Column floated='right' width={6}>
          <Facebook />
        </Grid.Column>

        <Grid.Row>
          <Grid.Column>
            <GroupList
              allGroups={this.props.allGroups}
              handleClick= {this.props.handleClick}
              groupObj={this.props.groupObj}
              members={this.props.members}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment compact>
                  <Link to= "/editHome">
                    <Button inverted color='purple'>
                      Edit Family Tree
                    </Button>
                  </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
