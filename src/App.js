import React, { Component } from 'react';
import './App.css';
import FamilyTree from './MainPages/FamilyTree'
// import Facebook from './facebook'
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'
// const update = require('immutability-helper');
// const objectAssign = require('object-assign');

class App extends Component {

  render() {
    return (
      <div className="App">
        <FamilyTree/>
      </div>
    );
  }
}
export default (App);
