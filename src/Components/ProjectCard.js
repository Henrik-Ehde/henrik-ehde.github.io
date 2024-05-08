import React from 'react'
import './ProjectCard.css';

export default function ProjectCard(props) {
  return (
    <div className = "ProjectCard">
        <img src={props.project.Image} alt="Bakery Screenshot"></img>


      <div className = "TextBox">
        <h3>{props.project.Title}</h3>
        
        <p style={{ whiteSpace: 'pre-line' }}>
          {props.project.Description}
        </p>

        <div className = "Buttons">
          {props.project.GithubUrl != null && <a target="_blank" href={props.project.GithubUrl}> <button id="bt" >Github</button> </a>}
          {props.project.SiteUrl != null && <a target="_blank" href={props.project.Site}> <button id="bt" >Site</button> </a>}   
        </div>

         
      </div>

    </div>
  )
}
