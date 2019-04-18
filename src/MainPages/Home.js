import React, { Component } from 'react';
import {Grid, Reveal } from 'semantic-ui-react'
import GroupList from '../containers/GroupList'
import {Link} from 'react-router-dom'
import { Button, Segment, Card } from 'semantic-ui-react'
import { Header, Icon, Image, Container } from 'semantic-ui-react'
import Navbar from '../components/Navbar';
import Facebook from '../facebook'

class Home extends Component {
  constructor(){
    super()
      this.state= {
      allGroups: [],
      selectedCard:{}
    }
  }

 


  render() {
    return ( 
      <Grid  >
          
              <Grid.Row centered className="welcome">
                <h1 className="welcome">Welcome to Family StoryBoard!</h1>
                <br/>
              </Grid.Row>
                
                  <Grid.Row centered>
                    <Facebook />
                  </Grid.Row>
               
  
              
              <Grid.Row centered className="welcome">
                <h3 className="welcome">Where the apple doesn't fall far from the tree!</h3>
                <br/>
              </Grid.Row>
          

            
          

          <Grid.Row centered>
            <Grid.Column centered >
                <GroupList 
                    allGroups={this.props.allGroups}
                    handleClick= {this.props.handleClick}
                    groupObj={this.props.groupObj}
                    members={this.props.members}
                  />

                  
          </Grid.Column>
          </Grid.Row>   
             
          


         <Grid.Row>
            <Grid.Column centered >
              <Segment compact>
                  <Link to= "/editHome">
                    <Button inverted color='purple'>
                      Edit Family Tree
                    </Button>
                  </Link>
                </Segment>
            </Grid.Column>  
          </Grid.Row>
               
        </Grid>
       
          
    );
  }
}


export default Home;

