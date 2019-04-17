import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import SingleStoryModal from './SingleStoryModal'
import { Button,Item,Header,Container} from 'semantic-ui-react'
const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}
const FamilyPostModal = (props) => (
    <Modal trigger={ <Button size='massive'>Stories About Family</Button>}>
      <Modal.Header> <h1> Stories About Family!</h1>
      <Modal.Content image>
        <div className='image'>
          <Image wrapped size ='medium' src={"https://www.family-action.org.uk/content/uploads/2017/11/Mixed-Raced-family-e1513084049363-600x320.jpg"} />
        </div>
      </Modal.Content>
      </Modal.Header>
        <Modal.Description>
        <Header as='h3' content='Share all Your Favorite Stories!' style={style.h3} textAlign='center' />
        <Container>
          
            <Item.Group divided>
            {props.allPosts.map(post => { 
              return <Item centered>
                  <Item.Content>
                      <Item.Header textAlign='center' as='a'>{post.title}</Item.Header>
                      <Item.Meta>
                        {/* <span>Date</span> */}
                        <span>{post.author}</span>
                      </Item.Meta>
                      <Item.Extra>
                        <Image textAlign='center' avatar circular size='small' src={post.picture} /> 
                      </Item.Extra>
                      <Item.Description>
                      {post.body}
                      </Item.Description>
                  </Item.Content>
            </Item> })}
          </Item.Group>
        </Container>
        </Modal.Description>
  
      <Modal.Actions>
        <SingleStoryModal handleNewPost={props.handleNewPost}/>
      </Modal.Actions>
    </Modal>
  )
  
  export default FamilyPostModal

