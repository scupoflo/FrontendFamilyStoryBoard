import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      allGroups:[]
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header"> My Family Tree 
        <br/>
        <br/>
        <br/>
        <CardGroup >
          <Card bg="warning" text="white">
            <Card.Img variant="top" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53300008_10158918221058084_6280956535833100288_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=2a62c038c7cfb1874f985064c702c4e0&oe=5D38A73E" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              Immediate family
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Option to place a Footer for Family Group</small>
            </Card.Footer>
          </Card>
          <Card bg="primary" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <Card.Text>
                Choose a family group to see their stories!{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="warning" text="white">
            <Card.Img variant="top" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52348527_10213500268411474_7845759593035595776_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=f3e197fa5ec9244a8cc52e2a0a06a8b0&oe=5D0CEA99" />
            <Card.Body>
              <Card.Title>Florez Family</Card.Title>
              <Card.Text>
                Mom's Side of the Family Example
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br/>
        <br/>
        <ButtonToolbar> <Button variant="success" size="lg">Edit Family Tree</Button> </ButtonToolbar>
        </header>

          <Container>
          <Row>
            <Col> Announcement Forum </Col>
            
          </Row>
         
        </Container>
        
        
      </div>
    );
  }
}

export default App;
