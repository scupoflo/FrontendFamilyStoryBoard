import React, { Component } from 'react';
import {Card, Button, Image, Reveal } from 'semantic-ui-react'
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
      <Reveal animated='fade'>
      <Reveal.Content visible>
          <Card fluid raised color="green"
                onClick={()=>this.props.handleClick(this.props.group)}>
            <Card.Content>
            
            
            
            <Image as='div' centered fluid src={this.props.group.picture} />
            

           
            </Card.Content>
            <Card.Content extra>
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
              <Link to={`/groups/${this.props.group.id}`}>
                <Button inverted color='orange' data-group-id={this.props.group.id}>
                  View Stories!
                </Button>
              </Link>
            </Card.Content>
          </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image circular size='small' src='https://images.pexels.com/photos/416443/pexels-photo-416443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          </Reveal.Content>
        </Reveal>
          
    );
  }
}

export default GroupCard;



// <Reveal animated='rotate'>
// <Reveal.Content visible>
// <Image circular size='small' src={this.props.group.picture} />

// </Card.Content>

// <Card.Content extra>
// <Card.Header>{this.props.group.name}</Card.Header>
// <Route
//   path={`/groups/${this.props.group.id}`}
//   render={(props)=> {
//     console.log(this.state.allGroups)
//     let groupId= props.match.params.id
//     let group= this.props.group.id === groupId
//     console.log("group exists?", group)
//     return this.state.loading ? null : (
//         <GroupShowPage 
//           group={group}
          
//         />
//   )
// }}/>
// <Route
// path={`/groups/${this.props.group.id}`}
// render={ (props)=> {
//   return (
//     <GroupShowPage members={this.state.allMembers}/>)
// }}
// />
// <Link to={`/groups/${this.props.group.id}`}>
// <Button inverted color='orange' data-group-id={this.props.group.id}>
//   View Stories!
// </Button>
// </Link>
// </Card.Content>
// </Card>
