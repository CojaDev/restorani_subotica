import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {
  kafana,
  kafe,
  fast,
  restoran,
  picerija,
  pekara,
  kafa,
} from '../../Images/images.jsx';
import './kategorije.scss';

const Kategorije = () => {
  return (
    <section id="kategorije">
      <Container>
        <Row>
          <Col>
            <div className="naslov">
              <h2>Kategorije</h2>
            </div>
          </Col>
        </Row>
        <Row className="p-2 d-flex justify-content-center rows">
          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={fast} alt="" />
            <h2>Fast Food</h2>
          </Col>

          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={restoran} alt="" />
            <h2>Restoran</h2>
          </Col>

          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={kafa} alt="" />
            <h2>Kafić</h2>
          </Col>

          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={kafana} alt="" />
            <h2>Kafana</h2>
          </Col>

          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={picerija} alt="" />
            <h2>Picerija</h2>
          </Col>

          <Col md="2" className="kategorija">
            <div class="blur"></div>
            <img src={pekara} alt="" />
            <h2>Pekara</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Kategorije;
