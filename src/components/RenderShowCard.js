import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'


class RenderShowCard extends Component {
  constructor(props){
    super(props)
      this.state= {
        group: false
    }
  }



  render() {
      console.log(this.props.selectedToShow)
    return (
          <Card fluid raised color="green" onClick={this.props.handleAddMemberToGroup}>
            <Card.Content>

              <Card.Header>{this.props.selectedToShow.name}</Card.Header>

              <Image size='small' src={this.props.selectedToShow.picture} />
              <Card.Meta></Card.Meta>
              <Card.Description>
                  { (this.props.selectedToShow.relationship) ? <strong>{this.props.selectedToShow.relationship}</strong> : null }


              </Card.Description>
              <Card.Description>

              </Card.Description>
            </Card.Content>

          </Card>
    );
  }





}

export default RenderShowCard;
