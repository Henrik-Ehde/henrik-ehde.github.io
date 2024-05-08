import React from 'react'
import './ProjectCard.css';
import image from '../Images/Bakery.png';

export default function ProjectCard() {
  return (
    <div className = "ProjectCard">
        <img src={image} alt="Bakery Screenshot"></img>


      <div className = "TextBox">
        <h3>Title</h3>
        <p>
          placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin
          tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc
        </p>

        <div className = "Buttons">
          <a target="_blank" href="https://github.com/Henrik-Ehde/Bakery"> <button id="bt" >Github</button> </a>
          <a target="_blank" href="https://henrik-ehde.github.io/Bakery/"> <button id="bt" >Site</button> </a>  
        </div>

         
      </div>

    </div>
  )
}
