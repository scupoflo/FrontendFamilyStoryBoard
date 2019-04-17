import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'

class EditGroupCard extends Component {
  render() {
    return (
      <div id={this.props.group.name}>
          <Card onClick={()=>this.props.handleClick(this.props.group)}>
            <Card.Content>
              <Image centered  src={this.props.group.picture} />
              <br/>
              <br/>
              <Card.Header>{this.props.group.name}</Card.Header>
            </Card.Content>
          </Card>
      </div>
    );
  }
}

export default EditGroupCard;
