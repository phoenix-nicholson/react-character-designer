import React from 'react';
import './Editor.css';

export default function Editor({
  head,
  middle,
  leg,
  phrase,
  headcount,
  middlecount,
  legcount,
  phrasecount,
  setHead,
  setLeg,
  setMiddle,
  setPhrase,
  setHeadcount,
  setMiddlecount,
  setLegcount,
  setPhrasecount,
}) {
  return (
    <div className="editor">
      <div className="form-control">
        <select value={head} name="head" onInput={(e) => setHead(e.target.value)}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
      </div>
      <div className="form-control">
        <select value={middle} name="middle" onInput={(e) => setMiddle(e.target.value)}>
          <option value="blue-middle">Blue Middle</option>
          <option value="dress-middle">Dress Middle</option>
          <option value="pink-middle">Pink Middle</option>
          <option value="red-middle">Red Middle</option>
        </select>
      </div>
      <div className="form-control">
        <select value={leg} name="leg" onInput={(e) => setLeg(e.target.value)}>
          <option value="blue-pants">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="leg-pants">Leg Pants</option>
          <option value="white-pants">White Pants</option>
        </select>
      </div>
    </div>
  );
}
