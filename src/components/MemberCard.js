import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class MemberCard extends Component {
  constructor(){
    super()
      this.state= {

    }
  }

  

  render() {
    console.log(this.props.members)
    return (
          <Card color="olive" raised>
            <Card.Content> 
              
              <Card.Header color="olive">{this.props.member.name}</Card.Header>
              
              <Image centered  size='medium' src={this.props.member.picture} />
              <Card.Meta></Card.Meta>
              <Card.Description>
               <strong>{this.props.member.relationship}</strong>
              </Card.Description>
            </Card.Content>

          </Card>
    );
  }
}

export default MemberCard;
