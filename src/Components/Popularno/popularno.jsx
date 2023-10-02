import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {
  subotica,
  subotica2,
  subotica3,
  restorani,
  restorani2,
  restorani3,
  restorani4,
  greenfood,
  best,
} from '../../Images/images.jsx';

import './popularno.scss';

function Popularno() {
  useEffect(() => {
    let slider = document.querySelector('.slider');
    let btns = document.querySelectorAll('.wrapper p');
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
              <li className="cards">
                <div className="img">
                  <img src={restorani} alt="img1" draggable="false" />
                </div>
                <h2>Boss</h2>
                <div className="info">
                  <span>Restoran</span>
                  <span className="ocena srednja">7.8</span>
                  <span className="status open">Otvoreno</span>
                </div>
              </li>
              <li className="cards">
                <div className="img">
                  <img src={greenfood} alt="img5" draggable="false" />
                </div>
                <h2>GreenFood</h2>
                <div className="info">
                  <span>Fast Food</span>
                  <span className="ocena dobra">10</span>
                  <span className="status open">Otvoreno</span>
                </div>
              </li>
              <li className="cards">
                <div className="img">
                  <img src={restorani2} alt="img2" draggable="false" />
                </div>
                <h2>Bates</h2>
                <div className="info">
                  <span>Restoran</span>
                  <span className="ocena dobra">9.5</span>
                  <span className="status open">Otvoreno</span>
                </div>
              </li>
              <li className="cards">
                <div className="img">
                  <img src={best} alt="img6" draggable="false" />
                </div>
                <h2>Best</h2>
                <div className="info">
                  <span>Fast Food</span>
                  <span className="ocena dobra">8.7</span>
                  <span className=" status open">Otvoreno</span>
                </div>
              </li>
              <li className="cards">
                <div className="img">
                  <img src={restorani3} alt="img3" draggable="false" />
                </div>
                <h2>Renesansa</h2>
                <div className="info">
                  <span>Restoran</span>
                  <span className="ocena dobra">8.8</span>
                  <span className=" status open">Otvoreno</span>
                </div>
              </li>
              <li className="cards">
                <div className="img">
                  <img src={restorani4} alt="img4" draggable="false" />
                </div>
                <h2>Mala Gostiona</h2>
                <div className="info">
                  <span>Restoran</span>
                  <span className="ocena srednja">7.9</span>
                  <span className="status open">Otvoreno</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Popularno;
