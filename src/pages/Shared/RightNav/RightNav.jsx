import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="primary"><FaGoogle className='me-2'></FaGoogle >  Login with Google</Button>
            <Button variant="secondary">
                <FaGithub className='me-2'></FaGithub>

                LoginWith Github</Button>

            <div>
                <h4>Find us on</h4>

                <ListGroup>
                    <ListGroup.Item>  <FaFacebookF></FaFacebookF>facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> </ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;