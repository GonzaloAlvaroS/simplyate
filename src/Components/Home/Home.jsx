import "./Home.css"
import React, { useEffect, useRef } from 'react';

const Home = () => {

  const refs = {
    animation: useRef(null),
  };

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

return (
    <div className='home'>
      <div ref={refs.animation} className='hometext'>
        <h1>SIMPLYATE</h1>
        <p>We have helped hundreds of companies achieve success thanks to our impeccable working methods.</p>
      </div>
    </div>
  )
}

export default Home