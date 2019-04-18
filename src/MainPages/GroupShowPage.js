import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import MemberCard from '../components/MemberCard';
import PersonalPostModal from '../modal/PersonalPostModal'
import FamilyPostModal from '../modal/FamilyPostModal'
import { Card } from 'semantic-ui-react'


class GroupShowPage extends Component {
  constructor(props){
    super(props)
      this.state= {
        allPosts: [],
        author: null
        
    }
  }

componentDidMount = () => {
  fetch(`http://localhost:3000/api/v1/users`)
  .then(resp => resp.json())
  .then(allData => {
    console.log(allData[0].posts)
    let firstUserPostData= allData[0].posts
      return this.setState({
        allPosts:firstUserPostData,
        author: allData[0]
      })
  }
 )
}

handleNewPost = (newPost) => {
  console.log(newPost)
    this.setState({
      allPosts: [...this.state.allPosts,newPost]
    })
  }



  

  render() {
    return (
      <Grid columns='equal' >
          <Grid.Row centered>
            <Grid.Column centered >
              <Card.Group centered itemsPerRow={6}>
                {this.props.group.members.map(member=>        
                  <MemberCard 
                  key={member.name}
                  member={member}/>
                )}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
         

          <Grid.Row>
              <Grid.Column  width={8}>
                <PersonalPostModal 
                  handleNewPost={this.handleNewPost}
                  author={this.state.author}
                  allPosts={this.state.allPosts}
                />
              </Grid.Column>

              <Grid.Column  width={8}>
                <FamilyPostModal
                  group={this.props.group}
                  handleNewPost={this.handleNewPost}
                  author={this.state.author}
                  allPosts={this.state.allPosts}
                />
              </Grid.Column>
          </Grid.Row>

        

      </Grid>

    );
  }
}

export default GroupShowPage;
