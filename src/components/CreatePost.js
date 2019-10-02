import React, {Component} from 'react'
import {Button,Form, TextArea} from 'semantic-ui-react'

class CreatePost extends Component {
  constructor(props){
    super(props)
      this.state={
          id: "",
          title: "",
          body: "",
          picture: "",
          subject: "",
          author_id: null
          }
        }

      handleInputChange = (event,stateToChange) => {
        event.preventDefault()
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;


        this.setState({
          [stateToChange]: value
        })
        // this.handleAuthorChange()
      }

  // handleAuthorChange = (event) => {
    // if(this.state.author === "Shinik Cupo")
  //     this.setState({ author: 1})
  // }

  handleChange = (e) => {

    console.log('something is happening')
      console.log(e.target)
      console.log(e.target.type)
      console.log(e.target.value)
      this.setState({
        value: e.target.value
      });
  }

  handleCreateSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(resp => resp.json())
    .then(newPost => this.props.handleNewPost(newPost))
  }




  render() {
    return (
      <Form onSubmit= {this.handleCreateSubmit}>
    <Form.Field>
      <label>Title</label>
      <input
        type="text"
        name="title"
        placeholder='Title'
        onChange={(e) => this.handleInputChange(e,"title")}
        value={this.state.title}/>
    </Form.Field>
    <Form.Field>
      <label>Subject</label>
      <input
        placeholder='Subject'
        type="text"
        name="subject"
        value={this.state.subject}
        onChange={(e) => this.handleInputChange(e,"subject")}   />
    </Form.Field>

        <Form.Field>
      <label>Author</label>
      <input
        placeholder='Author'
        type="text"
        name="author"
        value={this.state.author}
        onChange={(e) => this.handleInputChange(e,"author_id")}   />
    </Form.Field>
    <Form.Field>
        <TextArea
            placeholder='Tell us stories!'
            type="text"
            name="body"
            value={this.state.body}
            onChange={(e) => this.handleInputChange(e,"body")}   />
    </Form.Field>
    <Form.Field>
      <label>Picture</label>
      <input
        placeholder='Add a picture if you have one!'
        type="text"
        name="picture"
        onChange={(e) => this.handleInputChange(e,"picture")}
        value={this.state.picture} />
    </Form.Field>
    <Button type='submit' value="Submit">Submit</Button>
  </Form>


    )
  }
}

export default CreatePost
