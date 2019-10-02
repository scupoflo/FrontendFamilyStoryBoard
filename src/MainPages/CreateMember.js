import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'
import Dropdown from '../containers/DropDown'

class CreateMember extends Component {
  constructor(props){
    super(props)
      this.state={
        name: '',
        picture: '',
        relationship: '',
        group: ''
      }
    }


    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  // handleAuthorChange = (e, { value }) => {
  //     console.log(value)
  // }

  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.name
    let picture= this.state.picture
    let relationship= this.state.relationship
    let group = this.state.group

    let data={
      name: name,
      picture:picture,
      relationship:relationship,
      group:group
    }


    fetch('http://localhost:3000/api/v1/members', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(newMember => {
      console.log(newMember)
      return this.props.handleShowCard(newMember) && this.props.addMember(newMember)
      })



  // handleSubmit = event => {
  //   event.preventDefault();
  //   fetch('http://localhost:3000/api/v1/members', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   }).then(resp => resp.json())
  //   .then(newMember => this.props.handleShowCard(newMember))
  // }



}
  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        Add New Member Card
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={this.state.name}
            onChange={event => this.handleInputChange(event)}
            />
        </Form.Field>

        <Form.Field>
          <label>Relationship</label>
          <input
            placeholder='Relationship'
            type="text"
            name="relationship"
            value={this.state.relationship}
            onChange={event => this.handleInputChange(event)}  />
        </Form.Field>

        <Form.Field>
          <label>Picture</label>
          <input
            placeholder='Add a picture if you have one!'
            type="text"
            name="picture"
            onChange={event => this.handleInputChange(event)}
            value={this.state.picture} />
        </Form.Field>

        <Form.Field>
          <label>Group</label>
          <input
            placeholder='Add Name of Group to Add!'
            type="text"
            name="group"
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.group} />
        </Form.Field>

        <Dropdown
                  title="Select location"
                  list={this.state.location}
                />
    <Button type='submit'>Submit</Button>

  </Form>
    )
  }
}

export default CreateMember
