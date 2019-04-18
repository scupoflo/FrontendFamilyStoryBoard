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
          <Card fluid raised color="olive">
            <Card.Content> 
              
              <Card.Header color="olive">
                <h1>
                  {this.props.member.name}
                </h1>
              </Card.Header>
              
              <Image as='div' centered  size='medium' circular fluid src={this.props.member.picture} />
              <Card.Meta></Card.Meta>
              <Card.Description>
               <strong>
                 <h2>
                  {this.props.member.relationship}
                 </h2>
                </strong>
              </Card.Description>
            </Card.Content>

          </Card>
    );
  }
}

export default MemberCard;
