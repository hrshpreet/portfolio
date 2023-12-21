import React from 'react';
import './App.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Intro from './components/intro';
import Projects from './components/projects';
import Techstack from './components/techstack';

function App() {
  return (
    <div className='contain'>
      <div className='scroll-snap-child'><Hero className='child' /></div>
      <div className='scroll-snap-child'><Intro className='child' /></div>
      <div className='scroll-snap-child'><Techstack className='child' /></div>
      <div className='scroll-snap-child'><Projects className='child' /></div>
      <div className='scroll-snap-child'><Footer className='child' /></div>
    </div>
  );
}

export default App;
