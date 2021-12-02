import React from 'react';
import './Preview.css';
export default function Preview({ head, middle, leg, phrase }) {
  return (
    <div className="pieces">
      <img src={`${process.env.PUBLIC_URL}/images/${head}.png`} />
      <img src={`${process.env.PUBLIC_URL}/images/${middle}.png`} />
      <img src={`${process.env.PUBLIC_URL}/images/${leg}.png`} />
    </div>
  );
}
