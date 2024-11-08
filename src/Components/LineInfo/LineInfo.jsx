import "./LineInfo.css";
import React from 'react';
import simpleicon from "../../assets/simpleicon.png";

const LineaInfo = () => {
  
  return (
    <div className='lineinfo'>
      <div className="lineinfo-images">
        <img src={simpleicon} alt="Icon 1" />
        <img src={simpleicon} alt="Icon 2" />
        <img src={simpleicon} alt="Icon 3" />
        <img src={simpleicon} alt="Icon 4" />
        <img src={simpleicon} alt="Icon 5" />
        <img src={simpleicon} alt="Icon 6" />
      </div>
    </div>
  );
};

export default LineaInfo;


