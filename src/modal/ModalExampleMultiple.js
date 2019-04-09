import React, { Component } from 'react'
import { Image,Button, Icon, Modal } from 'semantic-ui-react'
import GroupForumModal from './GroupForumModal'
import GroupCard from '../components/GroupCard'

const ModalExampleMultiple = (props) => (
    <Modal trigger={console.log(props.goal)}>
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