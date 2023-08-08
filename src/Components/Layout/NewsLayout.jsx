import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightNav from '../../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            

            
          <Header></Header>

            <Container>
               <Row>
 
                    <Col lg={9}>
                          <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>


 

        </div>



      
    );
};

export default NewsLayout;