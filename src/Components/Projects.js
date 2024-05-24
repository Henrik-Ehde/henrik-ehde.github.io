import BakeryImage from '../Images/Bakery.png';
import movieDatabaseImage from '../Images/moviedb.png';
import CardTraderImage from '../Images/CardTrader.png';
import portfolioImage from '../Images/portfolio.png';
import ProjectCard from './ProjectCard';

import React from 'react'

export default function Projects() {

  return (
    <div className="Projects">
        <h2 id="Projects">Projects</h2>

        {projects.map(item => <ProjectCard project= {item} />)}
        


      
    </div>
  )
}


class Project
{
    constructor(Title, description, image, githubUrl, siteUrl) {
        this.Title = Title;
        this.Description = description;
        this.Image = image;
        this.GithubUrl = githubUrl;
        this.SiteUrl = siteUrl;
      }
}

let projects =
[
  new Project (
    "Card Trader",       
    `A wep application where users can buy and sell cards from trading card games (TCGs).
    The project contains a frontend created with react and an ASP.NET API connected to a database.
    `,
    CardTraderImage,
    "https://github.com/Henrik-Ehde/CardTrader"
),

new Project (
  "Movie Database",       
  `A wep application connected to a database where users can browse movies.
  Users can register an account and log in, which will affect what they see and what actions they can take.
  Created with ASP.NET Core MVC. Deployed on Azure and connected to an azure database.`,
  movieDatabaseImage,
  "https://github.com/Henrik-Ehde/MovieDatabase",
  "https://henriksmoviedb.azurewebsites.net/"
),


    new Project (
        "Bakery",
        `Frontend for a small e-commerce website for a bakery.
        The site is responsive and designed to work for mobile as well as desktop.
        Created with HTML and CSS`,
        BakeryImage,
        "https://github.com/Henrik-Ehde/Bakery",
        "https://henrik-ehde.github.io/Bakery/",
      ),


        new Project (
          "Portfolio",
          `This website.
          A portfolio to demonstrate projects I've worked on.
          Created with React`,
          portfolioImage,
          "https://github.com/Henrik-Ehde/henrik-ehde.github.io/tree/work"
        ),

        // new Project (
        //   "Asset Tracking",
        //   `A C# Console application used to keep track of assets (Computers and Phones) owned company. The assets are stored in a local database using Entity Framework.
        //   `,
        //   assetTrackingImage,
        //   "https://github.com/Henrik-Ehde/Asset-Tracking-with-Entity-Framework"        
        // )

]
