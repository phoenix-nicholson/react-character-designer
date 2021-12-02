import React from 'react';
import './Editor.css';

export default function Editor({
  head,
  middle,
  leg,
  phrase,
  setHead,
  setLeg,
  setMiddle,
  setPhrase,
  setHeadcount,
  setMiddlecount,
  setLegcount,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadcount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddlecount((prevState) => prevState + 1);
  };
  const handleLeg = (e) => {
    setLeg(e.target.value);
    setLegcount((prevState) => prevState + 1);
  };
  return (
    <div className="editor">
      <div className="form-control">
        <select value={head} name="head" onInput={handleHead}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
      </div>
      <div className="form-control">
        <select value={middle} name="middle" onInput={handleMiddle}>
          <option value="blue-middle">Blue Middle</option>
          <option value="dress-middle">Dress Middle</option>
          <option value="pink-middle">Pink Middle</option>
          <option value="red-middle">Red Middle</option>
        </select>
      </div>
      <div className="form-control">
        <select value={leg} name="leg" onInput={handleLeg}>
          <option value="leg-pants">Leg Pants</option>
          <option value="blue-pants">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="white-pants">White Pants</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="phrase">Catchphrase</label>
        <input
          value={phrase}
          name="phrase"
          type="text"
          onInput={(e) => setPhrase(e.target.value)}
        />
      </div>
    </div>
  );
}
