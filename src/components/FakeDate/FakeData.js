import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Dinner from '../Dinner/Dinner';
import Home from '../Home/Home';
import './FakeData.css';





const FakeData = ({dinner}) => {
          console.log(dinner)
    return (

        <div className="col-md-4">
            <div className="main-container">
            <img style={{height:'200px'}} variant="top" src={require(`../../images/Dinner/${dinner.imageURL}`).default} alt=""/>
            <h5 className="h3">{dinner.name}</h5>
            <p>{dinner.description}</p>
            <h5 style={{marginLeft:'50px'}}>$ {dinner.price}</h5>
            </div>
            
                {/* <CardGroup>
                <Card style={{borderRadius:'20px'}}>
                <Card.Img style={{height:'200px'}} variant="top" src={require(`../../images/Dinner/${dinner.imageURL}`).default} />
            <Card.Body>
            <Card.Title>{dinner.name}</Card.Title>
             <Card.Text>
                 This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            </Card>
            </CardGroup> */}
        </div>
    );
};

export default FakeData;