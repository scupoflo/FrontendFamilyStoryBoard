import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import _ from 'lodash'
import EditGroupList from '../containers/EditGroupList'
import { Link} from 'react-router-dom'
import RequestFamilyCard from '../components/RequestFamilyCard';
import { array } from 'prop-types';
import AddMemberToGroup from '../containers/AddMemberToGroup';
import CreateMember from './CreateMember'

class CustomizeHomePage extends Component {
  constructor(){
    super()
      this.state= {
        allgroups: [],
        draggedItem: {},
        draggedOverItem: {},
        searchTerm: '',
        chosenGroup: {}
    }
  }

  

  // handleSearchChange = (e, { value }) => {
  //   console.log('searching')
  //   this.setState({ searchTerm: value })
  // }

  // handleUpdateDraggedItemState = item => {
  //   console.log("Dragged Item:", item)
  //   this.setState({draggedItem: item})
  // }

  // handleUpdateDraggedOverState = item => {
  //   debugger
  //   console.log("Dragged Over:", item)
  //   this.setState({draggedOver: item})
  // }

  handleClick = (group) => {
    console.log('Group clicked:', group.name)
    this.setState({chosenGroup: group})
  }

// 1.) Grab the onDrop Item and parse into an object 
// 2.) get access to their members array
// 3.) find if draggedItem id matches id of member inside of array 
//   if it does, do not add into array
//   if it does not, add into array
// 4.) Take out of family members that needs to be assigned a group

handleAddMemberToGroup = () => {
  debugger
}





  // if this.state.chosenGroup.members.filter(member=> member.id === this.state.draggedItem.id)
  // Do Not include in this.state.chosenGroup.memember array
  // if member.id != this.state.chosenGroup.member.id ===> add card into array

  addToShow = (object) => {
    
    console.log('YESSSSS',object)
    }
    // if (this.state.draggedItem.kind === 'serve_tool') {
    //   this.setState({serveGroup: []})
    //   this.addShakeClass(".trash-image")
    // }
    // if (this.state.draggedItem.kind === 'serve_ingredient') {
    //   this.setState({serveGroup: []})
    //   this.addShakeClass(".trash-image")
    // }
  

  render() {
    return (
      <Grid celled>
      {/* <Link to={`/editHome}`}> </Link> */}
        <Grid.Column floated="left" width={6}>
            <AddMemberToGroup
                allGroups={this.props.allGroups}  
                chosenGroup={this.state.chosenGroup}
                handleAddMemberToGroup={this.handleAddMemberToGroup}
                addToShow={this.addToShow}
            />
          
        </Grid.Column>


        <Grid.Column 
            floated="right" 
            width={10}
            onDragOver={e => {
              console.log(e.currentTarget.id)
              debugger
              console.log(e.currentTarget.id)}}
            onDrop={e => {e.preventDefault(); this.handleAddMemberToGroup()}}>
          <EditGroupList 
             allGroups={this.props.allGroups} 
             handleClick={this.handleClick}
             handleUpdateDraggedOverState={this.handleUpdateDraggedOverState} />
       
      	</Grid.Column>


        <Grid.Row>
          
          {/* <SearchBar
               onSearchChange={_.debounce(this.handleSearchChange, 500)}
               showNoResults={false} 
          />   */}
        </Grid.Row>
          
        <Grid.Row>
         
          {this.props.allGroups.map(group=> {
            if(group.members.length > 0){
            return (group.members.map((member, index) => 
              <RequestFamilyCard 
                member={member}
                draggable={true}
                handleUpdateDraggedItemState={(member)=> this.handleUpdateDraggedItemState(member)}/>
              ))}
          })}
          
        </Grid.Row>
      </Grid>
   
    );
  }
}

export default CustomizeHomePage;
