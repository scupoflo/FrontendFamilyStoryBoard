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
      <div>
        <Card.Group>
          {this.props.allGroups.map(group => (
            <EditGroupCard 
              key={group.name} 
              group={group}
              handleClick={this.props.handleClick}
            />
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default EditGroupList;
