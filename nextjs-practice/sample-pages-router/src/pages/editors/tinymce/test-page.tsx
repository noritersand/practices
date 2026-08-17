import {useRef, useState} from 'react';
import dynamic from 'next/dynamic';

const CustomHtmlEditor = dynamic(() => import('./custom-html-editor'), {ssr: false});

export default function TestPage() {
  const [value, setValue] = useState('');

  function save() {
    localStorage.setItem('content', value);
  }

  function load() {
    setValue(localStorage.getItem('content') || '');
  }

  function clear() {
    setValue('');
  }

  function expose() {
    console.log('content:', localStorage.getItem('content'));
  }

  return (
    <div>
      <CustomHtmlEditor />
      <br />
      <button type="button" onClick={save}>
        save
      </button>
      <button type="button" onClick={load}>
        load
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
      <button type="button" onClick={expose}>
        expose
      </button>
    </div>
  );
}
