import React from 'react';

import { Link } from 'react-router-dom';
import home from '../../images/Image/adult-blur-blurred-background-687824.png';
import image from '../../images/Image/chef-cook-food-33614.png';
import img from '../../images/Image/architecture-building-city-2047397.png';
import Dinner from '../Dinner/Dinner';
import Event from '../Event/Event';
import NavFile from '../NavFile/NavFile';
import { Card, CardGroup } from 'react-bootstrap';

const events = [
    {
        imageURL: 'blur-close-up-dairy-product-376464.png',
        name: 'Burger'
    },
    {
        imageURL: 'basil-blur-close-up-1437267.png',
        name: 'Burger'
    },
    {
        imageURL: 'brooke-lark-158019-unsplash.png',
        name: 'Burger'
    },
    {
        imageURL: 'edgar-castrejon-1SPu0KT-Ejg-unsplash.png',
        name: 'Burger'
    },
]



const Home = () => {



    return (

        <div >


            <div className="row">
                {
                    events.map(event => <Event event={event}></Event>)
                }
            </div>
           

            <div style={{marginLeft:'30px', marginTop:'15px'}}>
            <h3 style={{color:'red', fontWeight:'400'}}>Why you choose us </h3>
            <p style={{color:'green', fontWeight:'550'}}>Barton waited twenty always repair in within we do. An delighted offending curiously my is dashwoods at. Boy prosperous surrounded</p>
            </div>
            {/* <img src={home} alt=""/>
            <img src={image} alt=""/>
            <img src={img} alt=""/> */}
            <div>
                <div className="row">
                <CardGroup style={{margin:'5px', padding:'20px'}}>
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

export default Home;