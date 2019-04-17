import React, { Component } from 'react';
import {Grid, GridRow, GridColumn} from 'semantic-ui-react'
import MemberCard from '../components/MemberCard';
import GroupCard from '../components/GroupCard'
import CreateMember from '../MainPages/CreateMember'
import CreateGroup from '../MainPages/CreateGroup'
import RenderShowCard from '../components/RenderShowCard'

import _ from 'lodash'


class AddMemberToGroup extends Component {
  constructor(props){
    super(props)
      this.state= {
        allGroups: [],
        selectedGroup: {},
        selectedMember:{},
        allMembers:[]       
        
    }
  }

componentDidMount = () => {
  fetch(`http://localhost:3000/api/v1/groups`)
  .then(resp => resp.json())
  .then(allData => {
   this.setState({
        allGroups:allData,
        selectedToShow:null
      })
  }
 )
}

//  handleSubmit = event => {
//     event.preventDefault();
//     fetch('http://localhost:3000/api/v1/members', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(this.state)
//     }).then(resp => resp.json())
//     // .then(newMember => console.log(newMember))
//     .then(newMember => this.props.handleAddMemberToGroup(newMember))
//   }

handleNewMember = (newMember) => {
  console.log(newMember)
  let a= this.props.allGroups.filter(group => group.name === newMember.name)
  // if(this.state.group.name )
    // this.setState({
    //   all: [...this.state.allMembers,newPost]
    // })
  }

  
  handleChange = (event) => {
    event.persist()
    this.setState(
      {selectedGroup: Object.assign(this.state.selectedGroup, {[event.target.name]:event.target.value })}
    )
  }

  handleShowCard = (object) => {
    console.log("it's happening")
    if (typeof(object.relationship) !== 'undefined'){
      console.log('its a member!')
      this.setState({selectedToShow: object})
    } else{
      console.log('its a group!')
      this.setState({selectedToShow: object}) 
    }
    this.props.addToShow(this.state.selectedToShow)
  }

  loadingIndicator = () => {
    if(!this.state.selectedToShow){
      return (
      <div>
        <h1>Create a New Card to Add to Your Family Tree!</h1>
      </div>
      )
    }else{
      console.log(this.state.selectedToShow)
     
    return (
      
      <div>
         <RenderShowCard 
          selectedToShow={this.state.selectedToShow}/> 
          <p>Working...</p> 
      </div>
    )};
  }


  render() {
    return (
      <Grid celled>

          <Grid.Row>
          {/* {this.props.group.members.map(member=> 
                <MemberCard member={member}/>)} */}
          </Grid.Row>

          <Grid.Row>
              <Grid.Column floated="left" width={8}>
                <CreateMember 
                  handleShowCard={this.handleShowCard}
                  handleSubmit={this.handleSubmit}
                />
                
                
              </Grid.Column>
          </Grid.Row>

        <GridRow>
          <GridColumn>
            {this.loadingIndicator()}
            
          </GridColumn>
        </GridRow>


        <Grid.Row>
          <Grid.Column> 
          <CreateGroup handleShowCard={this.handleShowCard}/>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}

export default AddMemberToGroup;
