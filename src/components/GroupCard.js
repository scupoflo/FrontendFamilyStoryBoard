import React, { Component } from 'react';
import GroupCard from './components/GroupCard';

class GroupCard extends Component {
  constructor(){
    super()
      this.state= {
      
    }
  }

  render() {
    return (
      <div className="app">
        <Card bg="primary" text="white">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>Instructions</Card.Title>
        <Card.Text>
            Choose a family group to see their stories!{' '}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default GroupCard;


