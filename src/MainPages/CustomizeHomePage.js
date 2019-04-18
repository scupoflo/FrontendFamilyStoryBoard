import React, { Component } from 'react';
import {Grid,Card} from 'semantic-ui-react'
import _ from 'lodash'
import EditGroupList from '../containers/EditGroupList'

import RequestFamilyCard from '../components/RequestFamilyCard';

import AddMemberToGroup from '../containers/AddMemberToGroup';


class CustomizeHomePage extends Component {
  constructor(){
    super()
      this.state= {
        allGroups: [],
        allMembers:[],
        draggedItem: {},
        chosenGroup: {},
        deleteMember:{}
    }
  }

  

  handleClick = (group) => {
    console.log('Group clicked:', group.name)
    this.setState({chosenGroup: group})
  }



  handleDelete = (memberToDelete) => {
    console.log(memberToDelete)
    let newArr= this.state.allMembers.filter(member=>  {
      return member.id !== memberToDelete.id
    })
    this.setState({
      allMembers: newArr
    })     
  }

  addToShow = (object) => {
    
    console.log('YESSSSS',object)
    }

  handleDeleteGroup = (groupToDelete) => {
    console.log(groupToDelete)
    let newArr= this.state.allGroups.filter(group =>  {
      return group.id !== groupToDelete.id
    })
    this.setState({
      allGroups: newArr
    })     
  }

  // handleAddRequestingMember = () => {
  //   this.props.allGroups.map(group=> {
  //     if(group.members.length > 0){
  //       group.members.map(member=> (
  //       this.setState({ 
  //         allMembers: [...this.state.allMembers, member]
  //       })
  //       ))
  //     }
  //   })
  // }

  // componentDidMount = () => {
  //   fetch(`http://localhost:3000/api/v1/members`)
  //   .then(resp => resp.json())
  //   .then(allNewMembers => {
  //    return this.setState({
  //      allMembers: allNewMembers

  //    })
  //   }
  //  )
  // }

  componentDidMount = () => {
    Promise.all([
      fetch(`http://localhost:3000/api/v1/groups`),
      fetch(`http://localhost:3000/api/v1/members`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([allGroups, allMembers])=>{
      console.log(allGroups);
      console.log(allMembers);
      
 
      return this.setState({
        allGroups: allGroups,
        allMembers: allMembers,
      })
    })
  }
   
  addMember=(newMember)=>{
    this.setState({
      allMembers: [...this.state.allMembers, newMember]
    })
  }

  addGroup=(newGroup)=>{
    this.setState({
      allGroups: [...this.state.allGroups, newGroup]
    })
  }

  // componentDidMount(){
  //   // Promise.all allows multiple fetches to be done simultaneously, see below link
  //   // https://medium.com/@ahnahn.un/a-brief-intro-to-promise-all-92291d93780c
  //   Promise.all([
  //     fetch(‘http://localhost:3000/users/1’),
  //     fetch(‘http://localhost:3000/users/1/messages’),
  //     fetch(‘http://localhost:3000/users’)
 
  //   ])
  //   .then(([res1, res2) => Promise.all([res1.json(), res2.json()]))
  //   .then(([allGroups, allMembers])=>{
  //     console.log(allGroups);
  //     console.log(allMembers);
      
 
  //     return this.setState({
  //       allGroups: allGroups,
  //       allMembers: allMembers,
  //     })
  //   })
  // }


  render() {
    return (
      <Grid columns='equal' >
        <Grid.Column  width={5}>
            <AddMemberToGroup
                allGroups={this.state.allGroups}  
                chosenGroup={this.state.chosenGroup}
                handleAddMemberToGroup={this.handleAddMemberToGroup}
                addToShow={this.addToShow}
                handleAddMemberToGroup={this.handleAddMemberToGroup}
                addMember={this.addMember}
            />
          
        </Grid.Column>


        <Grid.Column width={11}>
          
            <EditGroupList 
              allGroups={this.state.allGroups} 
              handleClick={this.handleClick}
              addGroup={this.addGroup}
              handleDeleteGroup={this.handleDeleteGroup}    
            />
          
      	</Grid.Column>


        <Grid.Row>
          
          {/* <SearchBar
               onSearchChange={_.debounce(this.handleSearchChange, 500)}
               showNoResults={false} 
          />   */}
        </Grid.Row>
        
       
          <Grid.Row> 
          
            {this.state.allMembers.map(member=>  
              <Grid.Column>
                
                  <RequestFamilyCard 
                    member={member}
                    handleDelete={this.handleDelete}
                  />
                
              </Grid.Column>
              )}
        
          
         
            
        
        </Grid.Row>
        
      </Grid>
   
    );
  }
}

export default CustomizeHomePage;

