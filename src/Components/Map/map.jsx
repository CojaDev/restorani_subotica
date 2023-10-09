import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Circle,
} from 'react-leaflet';
import './map.scss';
import kordinate from '../api/kordinate.json';
const map = () => {
  const subotica = [46.10031277534119, 19.665009421411956];
  const bounds = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <section id="map">
      <Container>
        <Row>
          <Col>
            <div className="naslov">
              <h2>Mapa</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mapa">
              <div className="legends">
                <div className="legend">
                  <div className="boja red"></div>
                  <p className="text">Fast Food</p>
                </div>
                <div className="legend">
                  <div className="boja blue"></div>
                  <p className="text">Restoran</p>
                </div>
                <div className="legend">
                  <div className="boja orange"></div>
                  <p className="text">Picerija</p>
                </div>
                <div className="legend">
                  <div className="boja green"></div>
                  <p className="text">Kafana</p>
                </div>
                <div className="legend">
                  <div className="boja yellow"></div>
                  <p className="text">Pekara</p>
                </div>
                <div className="legend">
                  <div className="boja brown"></div>
                  <p className="text">Kafić</p>
                </div>
              </div>
              <MapContainer center={subotica} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {kordinate.map((kord, i) => (
                  <Marker position={kord.kordinate} key={i}>
                    <Popup>{kord.opis}</Popup>
                    <Circle
                      center={kord.kordinate}
                      pathOptions={kord.boja}
                      radius={35}
                    />
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default map;
