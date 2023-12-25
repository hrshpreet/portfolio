import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './cursor.css'

const Cursor = () => {
  useEffect(() => {
    const circle = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');

    gsap.set(circle, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCircle = (e) => {
        // Add a delay of 0.2 seconds (adjust as needed)
        setTimeout(() => {
          gsap.to(circle, {
            duration: 0.4,
            x: e.clientX,
            y: e.clientY,
          });
        }, 30);
      };

    const linkAnimIn = () => {
      gsap.to(circle, {
        duration: 0.3,
        scale: 1.8,
      });
    };

    const linkAnimOut = () => {
      gsap.to(circle, {
        duration: 0.3,
        scale: 1,
      });
    };

    window.addEventListener('mousemove', moveCircle);

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        linkAnimIn();
      });
      link.addEventListener('mouseout', () => {
        linkAnimOut();
      });
    });

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('mousemove', moveCircle);
      links.forEach((link) => {
        link.removeEventListener('mouseover', linkAnimIn);
        link.removeEventListener('mouseout', linkAnimOut);
      });
    };
  }, []); // Run only once on component mount

  return (
    <div>
      <div className="cursor">
        <svg width="60" height="60">
          <circle cx="30" cy="30" r="20" stroke="black" strokeWidth="1" fill="white"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
