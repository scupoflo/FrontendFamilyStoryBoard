import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import CustomizeHomePage from './CustomizeHomePage';
import { Button, Segment } from 'semantic-ui-react'
import GroupShowPage from './GroupShowPage'
import GroupForumModal from '../containers/GroupForumModal'
import Home from './Home'
import ModalExampleMultiple from '../modal/ModalExampleMultiple'

class FamilyTree extends Component {
  constructor(){
    super()
    this.state={
      allGroups:[],
      searchTerm: "",
      loading:true,
      selectedCard:{}
    }
  }

  componentDidMount = () => {
      fetch(`http://localhost:3000/api/v1/groups`)
      .then(resp => resp.json())
      .then(allGroupData => {
        console.log(allGroupData.slice(0,6))
        let withOutRepeatsArr= allGroupData.slice(0,6)
       return this.setState({
         allGroups:withOutRepeatsArr,
         loading:false
       })
      }
     )
    }



  InlineStyle = () => (
  <style>{`
    .grid {
      position: relative;
    }
    .grid:before {
      background-color: #F0F0F0;
      box-shadow: 0px 0px 0px 1px #DDDDDD inset;
      content: '';
      height: calc(100% - 2rem);
      left: 1rem;
      top: 1rem;
      position: absolute;
      width: calc(100% - 2rem);
     }
    .ui.divided.grid:before, .celled.grid:before {
      display: none;
    }
    .ui.aligned .column:after {
      display: none !important;
    }
    .grid .column:not(.row):not(.grid):after {
      background-color: rgba(86, 61, 124, .15);
      box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      content: '';
      display: block;
      min-height: 50px;
    }
    @media only screen and (max-width: 768px) {
      .stackable.grid:before {
        width: 100%;
        left: 0em;
      }
    }
  `}
  </style>
)



  render() {

    //Two Containers Vertically
    //To install Navbar routes, go to 58 min in video lecture
    return (
              <Switch>
                <Route
                  path="/groups/:id"
                  render={(props)=> {
                    let groupId= props.match.params.id
                    let group= this.state.allGroups.find(g => g.id === groupId)
                    console.log(props)
                    console.log(groupId)
                    return this.state.loading ? null : (
                      <GroupShowPage group={group}/>
                    )
                  }}/>
              

              <Route
                path="/editHome"
                render={ (props)=> {
                  return (
                    <CustomizeHomePage allGroups={this.state.allGroups}/>)
                }}
               />

               <Route
                path="/"
                render={ (props)=>
                  <Home allGroups={this.state.allGroups} />}
              />
           </Switch>
    );
  }
}


export default FamilyTree;
