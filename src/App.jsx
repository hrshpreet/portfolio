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
      <div className='scroll-snap-child'><Hero/></div>
      <div className='scroll-snap-child'><Intro/></div>
      <div className='scroll-snap-child'><Techstack/></div>
      <div className='scroll-snap-child'><Projects/></div>
      <div className='scroll-snap-child'><Footer/></div>
    </div>
  );
}

export default App;
