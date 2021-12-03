import React from 'react';
import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Main.css';
import background from '../../background.png';

export default function Main() {
  const [head, setHead] = useState('dog-head');
  const [middle, setMiddle] = useState('dress-middle');
  const [leg, setLeg] = useState('leg-pants');
  const [phrase, setPhrase] = useState('Phrase');
  const [headcount, setHeadcount] = useState(0);
  const [middlecount, setMiddlecount] = useState(0);
  const [legcount, setLegcount] = useState(0);
  const [phrasecount, setPhrasecount] = useState(0);
  const [namelist, setNamelist] = useState([]);
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {
        <>
          <Editor
            {...{
              setHead,
              setMiddle,
              setLeg,
              setPhrase,
              setPhrasecount,
              setHeadcount,
              setMiddlecount,
              setLegcount,
              setNamelist,
            }}
          />
        </>
      }
      {!!headcount && <p>You have changed your head {headcount} times!</p>}
      {!!middlecount && <p>You have changed your middle {middlecount} times!</p>}
      {!!legcount && <p>You have changed your legs {legcount} times!</p>}
      {!!namelist.length && (
        <div>
          {namelist.localeCompare((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
      <Preview
        {...{
          head,
          middle,
          leg,
          phrase,
          headcount,
          middlecount,
          legcount,
          phrasecount,
          namelist,
        }}
      />
    </main>
  );
}
