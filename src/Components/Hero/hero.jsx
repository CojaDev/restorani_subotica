import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  subotica,
  subotica2,
  restorani,
  restorani4,
} from '../../Images/images.jsx';

import './hero.scss';
function Hero() {
  return (
    <section id="hero">
      <div
        id="carouselFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="8000">
            <img
              src={restorani}
              className="d-block w-100"
              alt="sub1"
              draggable="false"
            ></img>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src={subotica2}
              className="d-block w-100"
              draggable="false"
              alt="sub2"
            ></img>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src={subotica}
              className="d-block w-100"
              draggable="false"
              alt="sub3"
            ></img>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src={restorani4}
              className="d-block w-100"
              draggable="false"
              alt="sub3"
            ></img>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg="6" md="8" className="content">
            <h1>Restorani Subotica</h1>
            <p>
              Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju
              restorana i jelovnika. Vaše gastronomsko putovanje počinje ovde.
            </p>
            <Form>
              <Row className="align-items-center">
                <Col lg="6" md="8" sm="auto" className="pe-0">
                  <Form.Control
                    className="mb-2 rounded-0"
                    id="inlineFormInput"
                    placeholder="Restoran..."
                  />
                </Col>
                <Col sm="auto">
                  <Button type="submit" className="mb-2 w-100 rounded-0">
                    Pretrazi
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
