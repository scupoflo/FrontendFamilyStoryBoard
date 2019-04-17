import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import CreatePost from '../components/CreatePost'

class SingleStoryModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Add a Post <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Story Title!</Modal.Header>
        <Modal.Content>
          <CreatePost handleNewPost={this.props.handleNewPost}/>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='Go Back' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
export default SingleStoryModal