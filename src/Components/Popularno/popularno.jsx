import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import restaurants from '../api/api.json';

import './popularno.scss';

function Popularno() {
  useEffect(() => {
    let slider = document.querySelector('#popularno .slider');
    let btns = document.querySelectorAll('#popularno .wrapper p');
    let firstCardWidth = slider.querySelector('.cards').offsetWidth + 16;
    //let sliderChildrens = [...slider.children];

    let isDragging = false,
      startX,
      startScrollLeft;

    // let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);

    /* Infinite Scroll
    sliderChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        slider.insertAdjacentHTML('afterbegin', card.outerHTML);
      });
    sliderChildrens.slice(-cardPerView).forEach((card) => {
      slider.insertAdjacentHTML('beforeend', card.outerHTML);
    });
*/
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        slider.scrollLeft +=
          btn.id === 'back' ? -firstCardWidth : firstCardWidth;
      });
    });

    function dragStart(e) {
      isDragging = true;
      slider.classList.add('dragging');
      startX = e.pageX;
      startScrollLeft = slider.scrollLeft;
    }
    function dragStop() {
      isDragging = false;
      slider.classList.remove('dragging');
    }

    function dragging(e) {
      if (!isDragging) return;
      slider.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    /* function infinteScroll() {
      if (slider.scrollLeft === 0) {
        slider.classList.add('no-transition');
        slider.scrollLeft = slider.scrollWidth - 2 * slider.offsetWidth;
        slider.classList.remove('no-transition');
      } else if (
        Math.ceil(slider.scrollLeft) ===
        slider.scrollWidth - slider.offsetWidth
      ) {
        slider.classList.add('no-transition');
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove('no-transition');
      }
    }
*/
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    //slider.addEventListener('scroll', infinteScroll);

    return () => {
      // Clean up the event listeners when the component unmounts
      slider.removeEventListener();
      slider.removeEventListener();
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

      // If closing time is smaller than opening time, add 24 hours to closing time
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
  const FirstSixRestaurants = restaurants.slice(0, 6);

  return (
    <section id="popularno">
      <Container>
        <Row>
          <Col className="naslov">
            <h2>Popularno</h2>
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
              {FirstSixRestaurants.map((restaurant, i) => (
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

export default Popularno;
