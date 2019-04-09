import React, { Component } from 'react'
import { Image,Button, Icon, Modal } from 'semantic-ui-react'

class GroupForumModal extends Component {
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
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const ModalExampleMultiple = (props) => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header> {console.log(props)}
    <Modal.Content image>
      <div className='image'>
        <Image wrapped size ='medium' src={"https://www.family-action.org.uk/content/uploads/2017/11/Mixed-Raced-family-e1513084049363-600x320.jpg"} />
      </div>
    </Modal.Content>
    </Modal.Header>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>

    <Modal.Actions>
      <GroupForumModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple
