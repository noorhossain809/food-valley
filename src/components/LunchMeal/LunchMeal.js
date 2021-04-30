import React from 'react';
import './LunchMeal.css'

const LunchMeal = ({lunch}) => {
    return (
        <div className="col-md-4">
            <div>
            <div className="main-container">
            <img style={{height:'200px'}} variant="top" src={require(`../../images/lunch/${lunch.imageURL}`).default} alt=""/>
            <h5 className="h3">{lunch.name}</h5>
            <p>{lunch.description}</p>
            <h5 style={{marginLeft:'50px'}}>$ {lunch.price}</h5>
            </div>
            </div>
        </div>
    );
};

export default LunchMeal;