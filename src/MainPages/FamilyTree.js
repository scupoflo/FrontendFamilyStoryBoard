import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import CustomizeHomePage from './CustomizeHomePage';
import GroupShowPage from './GroupShowPage'
import Home from './Home'

class FamilyTree extends Component {
  constructor(){
    super()
      this.state = {
        allGroups: [],
        searchTerm: "",
        loading: true,
        selectedCard: null,
        allMembers: []
      }
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/groups`)
      .then(resp => resp.json())
      .then(allGroupData => {
        console.log(allGroupData)
        // debugger
        let withOutRepeatsArr= allGroupData.slice(0,6)
          return this.setState({
            allGroups:withOutRepeatsArr,
            loading:false,
            allMembers: allGroupData.members
          })
          // console.log(this.allGroupData)
      })
  }

    handleClick = (groupObj) => {
      console.log(groupObj)
      this.setState({selectedCard: groupObj})
    }

    addMembers = () => {
      console.log(this.props.groupObj)
      console.log(this.props.group)
      if(this.props.group.members.length > 0){
      return this.props.group.members.map(member=> this.setState({allMembers: [...this.state.allMembers, member] }) )
      }
    }



  render() {

    //Two Containers Vertically
    //To install Navbar routes, go to 58 min in video lecture
    return (
              <Switch>

              <Route
                  path="/groups/:id"
                  render={(props)=> {
                    console.log(this.state.allGroups)
                    let groupId= parseInt(props.match.params.id)
                    let group= this.state.allGroups.find(g => g.id === groupId)
                    console.log("group exists?", group)
                    return this.state.loading ? null : (
                        <GroupShowPage
                          group={group}
                          groupObj={this.state.selectedCard}
                        />
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

                  <Home
                  allGroups={this.state.allGroups}
                  handleClick= {this.handleClick}
                  groupObj={this.state.selectedCard}
                  members={this.state.members} />}
              />
           </Switch>
    );
  }
}


export default FamilyTree;
