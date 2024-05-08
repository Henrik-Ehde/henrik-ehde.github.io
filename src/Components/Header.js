import React from 'react'
import './Header.css';
import Resume from '../Files/CV Henrik Ehde.pdf';

export default function Header() {
  return (
    <div className='Header'>
      <a href="#Top">Home</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      <a href={Resume} target='blank'>Resume</a>
    </div>
  )
}
