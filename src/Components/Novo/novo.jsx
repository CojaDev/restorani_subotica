import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import restaurants from '../api/api.json';

import './novo.scss';

function Novo() {
  useEffect(() => {
    let slider2 = document.querySelector('#novo .slider');
    let btns2 = document.querySelectorAll('#novo .wrapper p');
    let firstCardWidth = slider2.querySelector('.cards').offsetWidth + 16;

    let isDragging = false,
      startX,
      startScrollLeft;

    btns2.forEach((btn) => {
      btn.addEventListener('click', () => {
        slider2.scrollLeft +=
          btn.id === 'back' ? -firstCardWidth : firstCardWidth;
      });
    });

    function dragStart(e) {
      isDragging = true;
      slider2.classList.add('dragging');
      startX = e.pageX;
      startScrollLeft = slider2.scrollLeft;
    }
    function dragStop() {
      isDragging = false;
      slider2.classList.remove('dragging');
    }

    function dragging(e) {
      if (!isDragging) return;
      slider2.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    slider2.addEventListener('mousedown', dragStart);
    slider2.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);

    return () => {
      slider2.removeEventListener();
      slider2.removeEventListener();
      document.removeEventListener();
    };
  }, []);
  useEffect(() => {
    let statusSpans = document.querySelectorAll('.status');
    statusSpans.forEach((span) => {
      console.log(span.innerText);
      if (span.innerText === 'Otvoreno') {
        span.classList.remove('closed');
        span.classList.add('open');
      } else if (span.innerText === 'Zatvoreno') {
        span.classList.remove('open');
        span.classList.add('closed');
      }
    });
  });

  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':');
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  };

  const currentDay = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const updatedRestaurants = restaurants.map((restaurant) => {
    const radnoVreme = restaurant.radnoVreme[currentDay.toLowerCase()];
    let status = '';

    if (radnoVreme && radnoVreme.otvaranje && radnoVreme.zatvaranje) {
      const openingTime = convertTimeToMinutes(radnoVreme.otvaranje);
      let closingTime = convertTimeToMinutes(radnoVreme.zatvaranje);

      if (closingTime < openingTime) {
        closingTime += 24 * 60; // 24 hours in minutes
      }

      const currentTimeInMinutes = convertTimeToMinutes(currentTime);

      const isOpen =
        currentTimeInMinutes >= openingTime &&
        currentTimeInMinutes <= closingTime;

      if (isOpen) {
        status = 'Otvoreno';
        restaurant.status = status;
      } else {
        status = 'Zatvoreno';
        restaurant.status = status;
      }
    }

    // Create a new object with the status property and return it
    return { ...restaurant, status };
  });
  console.log(updatedRestaurants);
  const lastSixRestaurants = restaurants.slice(-6);

  return (
    <section id="novo">
      <Container>
        <Row>
          <Col className="naslov">
            <h2>Novo dodato</h2>
            <a href="">
              {' '}
              <p>Pogledaj Sve &gt;</p>
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="wrapper">
            <p id="back">{'<'}</p>
            <p id="next">{'>'}</p>
            <ul className="slider">
              {lastSixRestaurants.map((restaurant, i) => (
                <li className="cards" key={i}>
                  <div className="img">
                    <img
                      src={restaurant.slike[0]}
                      alt="img1"
                      draggable="false"
                    />
                  </div>
                  <h2>{restaurant.naziv}</h2>
                  <div className="info">
                    <span>{restaurant.vrsta}</span>
                    <span className="ocena srednja">{restaurant.ocena}</span>

                    <span className="status open">{restaurant.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Novo;
