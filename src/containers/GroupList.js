import React, { Component } from 'react';
import GroupCard from '../components/GroupCard';
import { Card } from 'semantic-ui-react'


class GroupList extends Component {
  constructor(){
    super()
    this.state={
      selectedGroup: null
    }
  }


  render(){
    return(
      <div>
        <Card.Group>
          {this.props.allGroups.map(group => (
            <GroupCard key={group.id} group={group} handleClick={this.props.handleClick} toggleImage={this.props.toggleImage} />
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default GroupList;
