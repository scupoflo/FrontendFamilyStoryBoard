
import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'


class CreateGroup extends Component {
    constructor(props){
      super(props)
        this.state={
          id: '',
          name: '',
          picture: '',
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
      fetch('http://localhost:3000/api/v1/groups', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(resp => resp.json())
      .then(newGroup => {
        console.log(newGroup)
        return this.props.handleShowCard(newGroup) && this.props.addGroup(newGroup)
      })
    }



    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          Add New Group Card
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
            <label>Picture</label>
            <input
              placeholder='Add a picture if you have one!'
              type="text"
              name="picture"
               onChange={event => this.handleInputChange(event)}
              value={this.state.picture} />
          </Form.Field>

      <Button type='submit'>Submit</Button>

    </Form>
      )
    }
  }

  export default CreateGroup
