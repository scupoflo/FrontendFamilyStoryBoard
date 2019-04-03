import React, { Component } from 'react';
// import Header from './Header';
// import GoalsContainers from './GoalsContainers';

class CustomizeHomePage extends Component {
  constructor(){
    super()
      this.state= {
      approvedMembers:[],
      allGroups:[],
      selectedMember: {},
      selectedGroup: {},
      requestedMembers: []
    }
  }



  render() {
    return (
      <div className="app">
        <ApprovedMemberContainer />
        <ShowContainer />
        <GroupContainer />
        <SearchBar />
        <button> View Family Requests </button>
        <button> Invite Family </button>
      </div>
    );
  }
}

export default CustomizeHomePage;
