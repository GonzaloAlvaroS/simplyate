import "./Service2.css";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Service2 = () => {
  const refs = {
    line1: useRef(null),
    line2: useRef(null),
    line3: useRef(null),
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

    const observer = new IntersectionObserver(handleScroll, { threshold: 0 });

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

  const navigate = useNavigate();

  const WhoAreWe = () => {
    navigate('who-are-we'); 
  };

  const HowDoesItWork = () => {
    navigate('how-does-it-work');  
  };

  const HowToStart = () => {
    navigate('how-to-start');  
  };

return (
    <div className='service2'>
      <div className="service2-title">
      <h1>CLEAR YOUR DOUBTS AND DISCOVER YOUR FUTURE</h1>
      </div>
      <div ref={refs.line1} className='service2line1' onClick={WhoAreWe}>
        <div className="service2text1">
          <h1>SIMPLYATE - Who are we?</h1>
        </div>
      </div>
      <div ref={refs.line2} className='service2line2' onClick={HowDoesItWork}>
        <div className="service2text2">
          <h1>How does my business boost work?</h1>
        </div>
      </div>
      <div ref={refs.line3} className='service2line3' onClick={HowToStart}>
        <div className="service2text3">
          <h1>How can I start my business?</h1>
        </div>
      </div>
    </div>
  );
}

export default Service2;


