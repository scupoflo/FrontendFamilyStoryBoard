import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class RequestFamilyCard extends Component {

  render() {
    return (
      
          <Card raised color="green">
            <Card.Content> 
              
              <Card.Header>{this.props.member.name}</Card.Header>
              
              <Image as='div' centered fluid size='small' src={this.props.member.picture} />
              <Card.Description>
               <strong>{this.props.member.relationship}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                
                <Button onClick={() => this.props.handleDelete(this.props.member)} basic color='red'>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
     
          
      
    );
  }
}

export default RequestFamilyCard; 
