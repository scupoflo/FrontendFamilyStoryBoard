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
  fetch(`http://localhost:3000/api/v1/posts`)
  .then(resp => resp.json())
  .then(allPosts => {
    // console.log(allData[0].posts)
      return this.setState({
        allPosts:allPosts
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

  // DELETE EXAMPLE
  // https://stackoverflow.com/questions/40284338/react-fetch-delete-and-put-requests
//   fetch('https://example.com/delete-item/', {
//   method: 'DELETE',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({id: '5bdcdfa40f0a326f858feae0'})
// })
// .then(res => res.text())
// .then(res => alert(res)) 
// Collapse

  handleDeletePost = (postToDelete) => {
    console.log(postToDelete)
    fetch(`http://localhost:3000/api/v1/posts/${postToDelete.id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: postToDelete.id})
    })
    .then(res => res.text())
    .then(res => console.log(res))
    
    // let newArr= this.state.allPosts.filter(post=>  {
    //   return post.id !== postToDelete.id
    // })
    // this.setState({
    //   allPosts: newArr
    // })     
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
              {/* <Grid.Column  width={8}>
                <PersonalPostModal 
                  handleNewPost={this.handleNewPost}
                  author={this.state.author}
                  allPosts={this.state.allPosts}
                />
              </Grid.Column> */}

              <Grid.Column centered >
                <FamilyPostModal
                  group={this.props.group}
                  handleNewPost={this.handleNewPost}
                  author={this.state.author}
                  allPosts={this.state.allPosts}
                  handleDeletePost={this.handleDeletePost}
                />
              </Grid.Column>
          </Grid.Row>

        

      </Grid>

    );
  }
}

export default GroupShowPage;
