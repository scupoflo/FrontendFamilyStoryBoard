import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import { Container, Divider, Grid, List, Header, Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Card } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Route, Link, Redirect, Switch} from 'react-router-dom'

class CustomizeHomePage extends Component {
  constructor(){
    super()
      this.state= {
        allgroups: [],
        searchTerm: ''
    }
  }

  handleSearchChange = (e, { value }) => {
    console.log('searching')
    this.setState({ searchTerm: value })
  }

  render() {
    return (
      <Link to={`/editHome}`}>
      <Grid celled>
        <Grid.Column floated="left" width={10}>
          <Grid.Row>

          </Grid.Row>

          <Grid.Row>
            <SearchBar
               onSearchChange={_.debounce(this.handleSearchChange, 500)}
               showNoResults={false} />
          </Grid.Row>

        </Grid.Column>







        <Grid.Column floated="right" width={6}>
          <GroupList allGroups={this.props.allGroups} handleClick={null} />
      	</Grid.Column>


        <Grid.Row>
          <Grid.Column> </Grid.Column>
        </Grid.Row>
      </Grid>
      </Link>

    );
  }
}

export default CustomizeHomePage;
