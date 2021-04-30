import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';

const Event = ({event}) => {
    
    return (
        <div className="col-md-3">
                <CardGroup>
                <Card style={{borderRadius:'20px'}}>
            <Card.Img style={{height:'200px'}} variant="top" src={require(`../../images/Image/${event.imageURL}`).default} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
             <Card.Text>
                 This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Event;