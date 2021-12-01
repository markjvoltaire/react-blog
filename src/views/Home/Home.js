import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text useState
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('align');
  const [text, setText] = useState('text');
  return (
    <main>
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor {...{ setTitle, setSubtitle, setFont, setAlign, setText }} />
    </main>
  );
}
