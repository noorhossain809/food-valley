import React from 'react';
import Break from '../Break/Break';
import home from '../../images/Image/adult-blur-blurred-background-687824.png';
import image from '../../images/Image/chef-cook-food-33614.png';
import img from '../../images/Image/architecture-building-city-2047397.png';
import { Card, CardGroup } from 'react-bootstrap';

const breakfast = [
    {
        imageURL: 'breakfast1.png',
        name: 'Healthy Egg Plat',
        description: 'How we dream about our feature',
        price: '11.99'
    },
    {
        imageURL: 'breakfast2.png',
        name: 'Healthy Fruits',
        description: 'How we dream about our feature',
        price: '14.69'
    },
    {
        imageURL: 'breakfast3.png',
        name: 'Tarragon-Salmon',
        description: 'How we dream about our feature',
        price: '12.75'
    },
    {
        imageURL: 'breakfast4.png',
        name: 'Vegetable With Egg',
        description: 'How we dream about our feature',
        price: '11.66'
    },
    {
        imageURL: 'breakfast5.png',
        name: 'Healthy Bread',
        description: 'How we dream about our feature',
        price: '15.99'
    },
    {
        imageURL: 'breakfast6.png',
        name: 'Healthy Bread-Egg',
        description: 'How we dream about our feature',
        price: '16.20'
    },
  ]

const Breakfast = () => {
    return (
        <div>
            <div className="row">
                {
                    breakfast.map(events => <Break events={events}></Break>)
                }
            </div>
            <div style={{marginLeft:'30px', marginTop:'15px'}}>
            <h3 style={{color:'red', fontWeight:'400'}}>Why you choose us </h3>
            <p style={{color:'green', fontWeight:'550'}}>Barton waited twenty always repair in within we do. An delighted offending curiously my is dashwoods at. Boy prosperous surrounded</p>
            </div>
            
            
            <div>
                <div className="row">
                <CardGroup style={{marginLeft:'20px'}}>
                <Card style={{margin:'20px'}}>
                    <Card.Img style={{height:'350px'}} variant="top" src={home} />
                    <Card.Body>
                        <Card.Title style={{color:'red', fontWeight:'450'}}>Fast Delevery</Card.Title>
                        <Card.Text>
                            Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our feature.
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{margin:'20px'}}>
                    <Card.Img style={{height:'350px'}} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{color:'red', fontWeight:'450'}}>A Good Auto Responder</Card.Title>
                        <Card.Text>
                        Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our feature. {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{margin:'20px'}}>
                    <Card.Img style={{height:'350px'}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title style={{color:'red', fontWeight:'450'}}>Home Delevery</Card.Title>
                        <Card.Text>
                        Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our feature.
                               </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;