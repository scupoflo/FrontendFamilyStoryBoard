import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class GroupCard extends Component {
  constructor(){
    super()
      this.state= {

    }
  }

  render() {
    return (
          <Link to={`/groups/${this.props.group.id}`}>
          <Card onClick={()=>this.props.handleClick(this.props.group)}>
            <Card.Content>
              <Image centered size='small' src={"https://www.family-action.org.uk/content/uploads/2017/11/Mixed-Raced-family-e1513084049363-600x320.jpg"} />
              <br/>
              <br/>
              <Card.Header>{this.props.group.name}</Card.Header>
            </Card.Content>
          </Card>
        </Link>
    );
  }
}

export default GroupCard;
