import React from "react";
import Project from "../../components/Project/Project";
import bandwich from "./images/1603235287992.png";
import quiz from "./images/1600304593493.png";
import weather from "./images/1600304651601.png";
import craving from "./images/1600809595729.png";
import burger from "./images/1604525795534.png";
import employee from "./images/1604525878229.png";

const Projects = () => {
  return (
    <>
    
      <br />
      <Project
        title="Weather Dashboard"
        image={weather}
        description="A weather application that displays current weather and a 5-day forecast for any city in the world"
        technologies="Created using HTML, CSS, Bootstrap, and Javascript."
        repo="https://github.com/CrazyJoeShow/hw-6-weatherApp-jrl"
        
      />
      <br />
      <Project
        title="Employee Directory"
        image={employee}
        description="A dynamically rendered employee directory that allows 
        the user to filter by name and search for certain employees"
        technologies="Created using React"
        repo="https://github.com/CrazyJoeShow/employee-DIR"
       
      />
      <br />
      <Project
        
      />
      <br />
      <Project
        title="Eat-Da-Burger!"
        image={burger}
        description="A simple full stack application that allows you to input burger names
         and decide if that burger has been devoured or not."
        technologies="Created using Node.js, Express.js, Handlebars, and MySQL"
        repo="https://github.com/CrazyJoeShow/burger"
       
      />
    </>
  );
};

export default Projects;
