import React, { Component } from 'react';
import GroupCard from './components/GroupCard';


class GroupList extends Component {
  constructor(){
    super()
      this.state= {
      
    }
  }



  render() {
    return (
      <div className="group-list">
      <CardGroup >
        <GroupCard />
       </CardGroup>
        
        
        
        
      </div>
    );
  }
}

export default GroupList;