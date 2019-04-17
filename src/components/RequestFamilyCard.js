import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.item.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}


class RequestFamilyCard extends Component {

  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
          <Card
          draggable={true}
          onDragStart={() => this.props.handleUpdateDraggedItemState(this.props.member)}>
            <Card.Content> 
              
              <Card.Header>{this.props.member.name}</Card.Header>
              
              <Image floated='center' size='small' src={this.props.member.picture} />
              <Card.Meta></Card.Meta>
              <Card.Description>
               <strong>{this.props.member.relationship}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          </div>
    );
  }
}

export default DragSource('item', itemSource, collect)(RequestFamilyCard); 
