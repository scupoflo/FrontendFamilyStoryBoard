import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


class RenderShowCard extends Component {
  constructor(props){
    super(props)
      this.state= {
        group: false
    }
  }



  render() {
      console.log(this.props.selectedToShow)
    return (
          <Card>
            <Card.Content> 
              
              <Card.Header>{this.props.selectedToShow.name}</Card.Header> 
              
              <Image floated='center' size='small' src={this.props.selectedToShow.picture} />
              <Card.Meta></Card.Meta>
              <Card.Description>
                  { (this.props.selectedToShow.relationship) ? <strong>{this.props.selectedToShow.relationship}</strong> : null }
                
               
              </Card.Description> 
              <Card.Description>
                  { 'where group name should show' }
                
               
              </Card.Description> 
            </Card.Content>

          </Card>
    );
  } 

  

//   render() {
//     console.log('it worked')
//   return (
        
//   );
// }


}

export default RenderShowCard;