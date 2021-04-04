import React from 'react';
import {Button, NavDropdown,Navbar,Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import './header.styles.css';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { store } from '../../redux/store';
import { UserState, ConnectDispatch, DISCONNECT } from '../../redux/types';
import { Dispatch } from 'redux';

 function disconnectWithSSO(history) {
    const json = '';
    localStorage.setItem('username', JSON.stringify('')); 
    console.log('json: ', json);
    store.dispatch({
        type: DISCONNECT,
    });
    history.push('/');
};


const Header = withRouter(({ history, user })  => (
    <Navbar bg="light" expand="sm">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
 
            </Nav>
            

                  <span style={{color:'blue',}} className="m-2"> {user ?'Hello '+ user + "!":'No User!'}</span>
                  <span className="m-2"><button type="button" className="btn btn-sm" style={{backgroundColor:'red'}} onClick={()=>disconnectWithSSO(history)}>Sign Out</button></span>
        </Navbar.Collapse>
    </Navbar>
));

const mapStateToProps = state => ({
    user:state.user
 })
 export default connect(mapStateToProps)(Header);