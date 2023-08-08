import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
 

const Registration = () => {
    return (
        <div>
                <Container className='mx-auto w-50 mt-4'>
           <h3> Please Register</h3>
            
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' required placeholder="Enter Name" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>   Phot URL</Form.Label>
        <Form.Control type="text" name='photo' required placeholder="Enter photo URL" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept' label="Accept terms and conditions" />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button><br />
      <Form.Text className="text-success">
    Already have an account?<Link to='/login'>Login</Link>
      </Form.Text>
      <br /><br />
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
        </Container>
        </div>
    );
};

export default Registration;