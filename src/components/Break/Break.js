import React from 'react';

const Break = ({events}) => {
    return (
        <div className="col-md-4">
            <div className="main-container">
            <img style={{height:'200px'}} variant="top" src={require(`../../images/Breakfast/${events.imageURL}`).default} alt=""/>
            <h5 className="h3">{events.name}</h5>
            <p>{events.description}</p>
            <h5 style={{marginLeft:'50px'}}>$ {events.price}</h5>
            </div>
        </div>
    );
};

export default Break;