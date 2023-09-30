import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  subotica,
  subotica2,
  subotica3,
  restorani,
  restorani2,
  restorani3,
  restorani4,
} from '../../Images/images.jsx';

import './hero.scss';
function Hero() {
  return (
    <section id="hero">
      <div
        id="carouselFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="8000">
            <img
              src={restorani}
              class="d-block w-100"
              alt="sub1"
              draggable="false"
            ></img>
          </div>
          <div class="carousel-item" data-bs-interval="8000">
            <img
              src={subotica2}
              class="d-block w-100"
              draggable="false"
              alt="sub2"
            ></img>
          </div>
          <div class="carousel-item" data-bs-interval="8000">
            <img
              src={subotica}
              class="d-block w-100"
              draggable="false"
              alt="sub3"
            ></img>
          </div>
          <div class="carousel-item" data-bs-interval="8000">
            <img
              src={restorani4}
              class="d-block w-100"
              draggable="false"
              alt="sub3"
            ></img>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md="6" className="relative">
            <h1>Restorani Subotica</h1>
            <p>
              Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju
              restorana i jelovnika. Vaše gastronomsko putovanje počinje ovde.
            </p>
            <Form>
              <Row className="align-items-center">
                <Col md="6" sm="auto">
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Restoran..."
                  />
                </Col>
                <Col sm="auto">
                  <Button type="submit" className="mb-2 w-100">
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
