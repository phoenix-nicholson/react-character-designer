import React from 'react';
import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('head');
  const [middle, setMiddle] = useState('middle');
  const [leg, setLeg] = useState('leg');
  const [phrase, setPhrase] = useState('Phrase');
  const [headcount, setHeadcount] = useState('headcount');
  const [middlecount, setMiddlecount] = useState('middlecount');
  const [legcount, setLegcount] = useState('legcount');
  const [phrasecount, setPhrasecount] = useState('phrasecount');
  return (
    <main>
      {
        <>
          <Preview
            {...{ head, middle, leg, phrase, headcount, middlecount, legcount, phrasecount }}
          />
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
            }}
          />
        </>
      }
    </main>
  );
}
