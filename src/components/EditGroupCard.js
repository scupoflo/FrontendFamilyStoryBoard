import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'

class EditGroupCard extends Component {
  render() {
    return (
      
          <Card fluid raised color="green" onClick={()=>this.props.handleDeleteGroup(this.props.group)}>
            <Card.Content>
              <Image as='div' centered size='medium' fluid src={this.props.group.picture} />
            </Card.Content>  
            <Card.Content>
              <Card.Header>{this.props.group.name}</Card.Header>
            </Card.Content>
          </Card>
      
    );
  }
}

export default EditGroupCard;
