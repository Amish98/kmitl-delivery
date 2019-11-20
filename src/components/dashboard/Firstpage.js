import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Row, Col } from 'reactstrap';
import {
  CardGroup, CardSubtitle, CardBody, Media, Badge, Breadcrumb, BreadcrumbItem, Toast, ToastBody, ToastHeader, Alert, margin, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'


const service = require('./service.png');
const price = require('./price.png');
const Firstpage = (props) => {

  return (

    /*<Jumbotron fluid body inverse style={{ backgroundColor: '#D6EAF8', borderColor: '#D6EAF8' }}>*/
    <div className="container">
      <br/>
      <div className="center">
        <p>
          <img class="media-obj" src={service} height="400" width="600" />
        </p>
      </div>
      <div className="center">
        <p>
          <img class="media-obj" src={price} height="300" width="600" />
        </p>
      </div>
      <div className='center'>

        <Button href="/signup"  color="info" size="lg" block role="button" aria-disabled="true">Register Now</Button>
      </div>
      <br/>
      <CardGroup>
        <Card>

          <CardBody>
            <CardSubtitle><h3>Contact</h3></CardSubtitle>
            <CardText>tel. (02)22222222</CardText>
            <CardText>kmitl.deliver@kmtil.ac.th</CardText>

          </CardBody>
        </Card>
        <Card>

          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText></CardText>

          </CardBody>
        </Card>
        <Card>

          <CardBody>
            <CardTitle><h3>PRODUCT</h3></CardTitle>
            <CardText>DRIVE</CardText>
            <CardText>DELIVER</CardText>
            <CardText>BUSINESS</CardText>
            <CardText>PRICING</CardText>

          </CardBody>
        </Card>
      </CardGroup>
      <br />
      <Row>
        <Col xs="6" sm="4">
          <CardText><h6>© KMITL-DELIVERY 2019. </h6></CardText>
        </Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4">
          <CardText><h6>All Rights Reserved</h6></CardText>
        </Col>
      </Row>



    </div>


  );
};

export default Firstpage;