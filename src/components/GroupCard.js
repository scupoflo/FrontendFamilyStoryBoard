import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom'
import GroupShowPage from '../MainPages/GroupShowPage'



class GroupCard extends Component {
  constructor(){
    super()
      this.state= {
        

    }
  }

  

  render() {
    return (
      <div id={this.props.group.name}>
          <Card raised color="green"
                onClick={()=>this.props.handleClick(this.props.group)}>
            <Card.Content>
              <Image centered  size='medium' src={this.props.group.picture} />
              <br/>
              <br/>
              <Card.Header>{this.props.group.name}</Card.Header>
              <Route
                  path={`/groups/${this.props.group.id}`}
                  render={(props)=> {
                    console.log(this.state.allGroups)
                    let groupId= props.match.params.id
                    let group= this.props.group.id === groupId
                    console.log("group exists?", group)
                    return this.state.loading ? null : (
                        <GroupShowPage 
                          group={group}
                          
                        />
                  )
                }}/>
              <Route
                path={`/groups/${this.props.group.id}`}
                render={ (props)=> {
                  return (
                    <GroupShowPage members={this.state.allMembers}/>)
                }}
               />
              <Link to={`/groups/${this.props.group.id}`}><button data-group-id={this.props.group.id}>More Info</button></Link>
            </Card.Content>
          </Card>
          </div>
    );
  }
}

export default GroupCard;
