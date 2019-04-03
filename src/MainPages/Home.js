import React, { Component } from 'react';
import CustomizeHomePage  from './CustomizeHomePage ';
// import GoalsContainers from './GoalsContainers';

class Home extends Component {
  constructor(){
    super()
      this.state= {
      allGroups: []
    }
  }



  render() {
    return (
      <div className="app">
        <FamilyTree />
        <ShowContainer />
        <GroupContainer />
        <SearchBar />
        <button> View Family Requests </button>
        <button> Invite Family </button>
      </div>
    );
  }
}

export default Home;
