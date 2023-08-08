import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RightNav from '../../pages/Shared/RightNav/RightNav';
import LeftNav from '../../pages/Shared/Left/LeftNav';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';


const MainLayout = () => {
    return (
        <div>

            <Header></Header>
            <NavigationBar></NavigationBar>

            <Container>
               <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                         <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>


            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;