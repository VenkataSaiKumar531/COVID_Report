import React from 'react';
import {Navbar} from 'react-bootstrap';


const MyNavbar = ()=>{


  console.log("Checking... envirnomental variable",process.env.REACT_APP_API);
    return (
        <Navbar bg="danger" variant="dark">
        <Navbar.Brand href="#home">
         COVID-19 Tracker
        </Navbar.Brand>
      </Navbar>
    )
}

export default MyNavbar;