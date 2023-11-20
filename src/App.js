
import React from 'react'
import "./Styles/main.css";
import NavBar from './components/Navbar'
import Section from './components/Section'
import Numbers from './components/Numbers'
import Section2 from './components/Section2'
import Card from './components/Card';
import Section3 from './components/Section3';


export default function App() {
  return (
    <div className='body-wrapper'>
       <NavBar />
       <Section />
       <Numbers />
       <Section2 />
       <Card />
       <Section3 />
    </div>
  )
}
