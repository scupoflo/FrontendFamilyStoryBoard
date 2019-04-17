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
        <Card.Group centered stackable>
          {this.props.allGroups.map(group => (
            <GroupCard 
              key={group.name} 
              handleClick={this.props.handleClick}
              handleUpdateDraggedOverState={this.props.handleUpdateDraggedOverState} 
              id= {group.name} 
              target={group.name} 
              group={group} 
              members={this.props.members} 
              handleClick={this.props.handleClick} 
              groupObj={this.props.groupObj} 
              toggleImage={this.props.toggleImage} />
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default GroupList;
