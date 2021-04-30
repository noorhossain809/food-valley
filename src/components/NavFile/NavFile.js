import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavFile = () => {
    return (
        <div>
             <Nav style={{justifyContent:'center', padding:'10px' }}>
            <Link to="/dinner"><h5>Dinner</h5></Link>
            <Link style={{marginLeft:'10px'}} to="/lunch"><h5>Lunch</h5></Link>
            <Link style={{marginLeft:'10px'}} to="/breakfast"><h5>Breakfast</h5></Link>
            </Nav>

        </div>
    );
};

export default NavFile;