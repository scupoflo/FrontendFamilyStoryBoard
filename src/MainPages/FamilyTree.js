import React, { Component } from 'react';
import FamilyGroupList from './FamilyGroupList';
import ShowContainer from './ShowContainer';
import GroupContainer from './GroupContainer';
import SearchBar from './SearchBar';

class FamilyTree extends Component {
  constructor(){
    super()
      this.state= {
      
    }
  }



  render() {
    return (
      <div className="app">
        <FamilyGroupList />
        <ShowContainer />
        <GroupContainer />
        <SearchBar />
        <button> View Family Requests </button>
        <button> Invite Family </button>
      </div>
    );
  }
}

export default FamilyTree;