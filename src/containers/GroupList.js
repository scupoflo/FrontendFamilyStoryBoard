import React, { Component } from 'react';
import GroupCard from '../components/GroupCard';
import { Card,Reveal,Image } from 'semantic-ui-react'


class GroupList extends Component {
  constructor(){
    super()
    this.state={
      selectedGroup: null
    }
  }


  render(){
    return(
      <Card.Group centered itemsPerRow={6}>
        
          {this.props.allGroups.map(group => (
            
            <GroupCard 
              key={group.name} 
              handleClick={this.props.handleClick}
              handleUpdateDraggedOverState={this.props.handleUpdateDraggedOverState} 
              id= {group.name} 
              target={group.name} 
              group={group} 
              members={this.props.members} 
              handleClick={this.props.handleClick} 
              groupObj={this.props.groupObj} 
              toggleImage={this.props.toggleImage} />
          
          ))}
        
        </Card.Group>
    )
  }
}

export default GroupList;



//   render(){
//     return(
      
//       <Card.Group centered itemsPerRow={6}>
//           {this.props.allGroups.map(group => (
//             <Reveal animated='fade'>
//             <Reveal.Content visible>
//             <GroupCard 
//               key={group.name} 
//               handleClick={this.props.handleClick}
//               handleUpdateDraggedOverState={this.props.handleUpdateDraggedOverState} 
//               id= {group.name} 
//               target={group.name} 
//               group={group} 
//               members={this.props.members} 
//               handleClick={this.props.handleClick} 
//               groupObj={this.props.groupObj} 
//               />
//               </Reveal.Content>
//               <Reveal.Content hidden>
//                 <Image circular size='small' src='https://images.pexels.com/photos/416443/pexels-photo-416443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
//               </Reveal.Content>
//             </Reveal>
//           ))}
//     </Card.Group>
        
      
//     )
//   }
// }

// export default GroupList;
