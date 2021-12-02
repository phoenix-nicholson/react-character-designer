import React from 'react';
import './Preview.css';
export default function Preview({ head, middle, leg, phrase }) {
  return (
    <div>
      <div className="pieces">
        <img className="body" src={`${process.env.PUBLIC_URL}/images/${head}.png`} />
        <img className="body" src={`${process.env.PUBLIC_URL}/images/${middle}.png`} />
        <img className="body" src={`${process.env.PUBLIC_URL}/images/${leg}.png`} />
      </div>
      <p>{phrase}</p>
    </div>
  );
}
