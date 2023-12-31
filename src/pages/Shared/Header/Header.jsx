import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container Container>

            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>

                <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
            </div>

            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50}  >
                    I can be a React component, multiple React components, or just some text.......       I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>

     



        </Container>
    );
};

export default Header;