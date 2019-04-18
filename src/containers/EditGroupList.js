import React, { Component } from 'react';
import EditGroupCard from '../components/EditGroupCard';
import { Card } from 'semantic-ui-react'


class EditGroupList extends Component {
  constructor(){
    super()
    this.state={
      selectedGroup: null
    }
  }


  render(){
    return(
      
        <Card.Group centered itemsPerRow={3}>
          {this.props.allGroups.map(group => (
            <EditGroupCard 
              key={group.name} 
              group={group}
              handleClick={this.props.handleClick}
              handleDeleteGroup={this.props.handleDeleteGroup}
            />
          ))}
        </Card.Group>
      
    )
  }
}

export default EditGroupList;
