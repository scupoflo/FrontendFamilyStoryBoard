import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class GroupCard extends Component {
  constructor(){
    super()
      this.state= {

    }
  }

  render() {

    //this has the buttons where the original doesn't
    return (
          <Card>
            <Card.Content>
              <Image centered size='small' src={"https://www.family-action.org.uk/content/uploads/2017/11/Mixed-Raced-family-e1513084049363-600x320.jpg"} />
              <br/>
              <br/>
              <Card.Header>{this.props.group.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Edit
                </Button>
                <Button basic color='red'>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
    );
  }
}

export default GroupCard;
