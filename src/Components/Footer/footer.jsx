import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.scss';
const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col lg="8" md="6" sm="12" className="p-5 pb-0 pr">
            <h2>Restorani Subotica</h2>
            <div className="line"></div>
            <p className="pt-2">
              Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju
              restorana i jelovnika.<br></br> Vaše gastronomsko putovanje
              počinje ovde.
            </p>
            <div class="social-icons mt-4 mb-3">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram "></i>
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12" className="p-5 pb-0">
            <a href="#">
              <p className="mt-3">O nama</p>
            </a>
            <a href="#">
              <p>Contact</p>
            </a>
            <a href="#">
              <p>Kategorije</p>
            </a>
            <a href="#">
              <p>Mapa</p>
            </a>
            <a href="#">
              <p>Restorani</p>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="donji d-flex justify-content-between p-4">
              <p>© Copyright Restorani Subotica. All Rights Reserved</p>
              <p>
                Designed by{' '}
                <a href="https://github.com/CojaDev" target="blank">
                  CojaDev
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
