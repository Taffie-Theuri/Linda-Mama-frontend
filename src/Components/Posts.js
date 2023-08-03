 
import React from "react";
import Post1 from "./blogpost2";
import Post2 from "./blogpost1";
import Post3 from "./blogpost3";
import Post4 from "./blogpost4";
import { Container, Row, Col, Card } from 'react-bootstrap';
 
 
const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between">
                <Col md={8} className="mb-4 mt-4">
                    <Post2 />
                </Col>
                <Col md={2} className="mt-4 float-right">
                    <Card>
                        <Card.Body>
                            <Card.Title>Recent Posts</Card.Title>
                            <ul className="list-unstyled">
                                <li><a href="#">BREAST FEEDING</a></li>
                                <li><a href="#">PELVIC FLOOR HEALTH</a></li>
                                <li><a href="#">SCREENING FOR DOWN SYNDROME</a></li>
                                <li><a href="#">COVID AND PREGNANCY: RISKS,VACCINES AND LACTATING</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="mb-4">
                    <Post1 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post3 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post4 />
                </Col>
            </Row>
        </Container>
    );
};
 
export default Posts;
