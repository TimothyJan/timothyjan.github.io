import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements OnInit{
  projects = new Array<Project>;

  ngOnInit(): void {
    /**
     * url: string;
     * name: string;
     * description: string;
     * techs: string[];
     */
    let project1 = new Project(
      "https://github.com/TimothyJan/C-based-Language-Compiler",
      "C Based Language Compiler",
      "Created Lexical Analyzer and Syntax Analyzer components of a compiler for a made-up C based language.",
      [
        "C++",
      ]
    );
    let project2 = new Project(
      "https://github.com/TimothyJan/Handwritten-Alphabet-Recognition-CNN",
      "Handwritten Alphabet Recognition CNN",
      "We recognize handwritten characters(English alphabets) from A-Z by modeling a Convolutional Neural Network that will be trained over a dataset containing images of alphabets.",
      [
        "Python",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project3 = new Project(
      "https://github.com/TimothyJan/RNN_Text_Generation",
      "RNN Text Generation",
      "We generate text using a character-based RNN. Our dataset is the text corpora for the elder scrolls game and some others games as well.",
      [
        "Python",
        "Tensorflow",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project4 = new Project(
      "https://github.com/TimothyJan/Autoencoder-Movie-Recommender",
      "Movie Recommender",
      "We apply autoencoders to the task of making movie recommendations.",
      [
        "Python",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "Jupyter Notebook"
      ]
    );
    let project5 = new Project(
      "https://github.com/TimothyJan/Workout-Tracker-Web-App",
      "Workout Tracker",
      "CRUD workout days with Strength and Cardio training sets.",
      [
        "C#",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "SQL Server",
        "Visual Studio 2022",
      ]
    );
    let project6 = new Project(
      "https://github.com/TimothyJan/MERN-Movie-Reviewer",
      "Movie Reviewer",
      "Full-stack movie review/rating management system using the MERN stack (MongoDB, Express, React, and Node.js).",
      [
        "JavaScript",
        "HTML",
        "CSS",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ]
    );
    let project7 = new Project(
      "https://github.com/TimothyJan/Flight-Price-Prediction-Flask",
      "Flight Price Prediction",
      "Flight Price Prediction Flask App using numpy, seaborn, pandas and sklearn.",
      [
        "Python",
        "Numpy",
        "Seaborn",
        "Pandas",
        "SKLearn",
        "Jupyter Notebook"
      ]
    );
    let project8 = new Project(
      "https://github.com/TimothyJan/Movie-Reviewer-SpringBoot-React",
      "Movie Reviewer",
      "Full stack web app using Mongodb for database, Java and Spring Boot for the backend, and React for the frontend. CRUD (Create, Read, Update and Delete) movie reviews and ratings.",
      [
        "Java",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
        "SpringBoot"
      ]
    );
    let project9 = new Project(
      "https://github.com/TimothyJan/Books-MEAN",
      "Books-MEAN",
      "Full-stack book review management system using Google Books API, MEAN stack (MongoDB, Express, Angular, Node), and Bootstrap.",
      [
        "MongoDB",
        "Express",
        "Angular",
        "Node",
        "Bootstrap",
        "Google Books API",
        "Typescript",
        "Javascript"
      ],
      "https://timothyjan.github.io/Books-Angular/"
    );
    let project10 = new Project(
      "https://github.com/TimothyJan/TodoList-ASP.NetCore-MinimalAPI-Angular",
      "TodoList",
      "Full-stack Todo List app with an ASP.Net Core Minimal API and a dynamic Angular Material frontend, successfully deployed to Azure.",
      [
        "ASP.Net Core",
        "Angular",
        "Azure",
        "C#",
        "Typescript",
        "Javascript"
      ],
      "https://timothyjan.github.io/TodoList-Angular-Frontend/"
    );
    let project11 = new Project(
      "https://github.com/TimothyJan/Music-Controller-Web-App",
      "Spotify Music Controller",
      "Collaborative music playing full stack web app integrated with the third party Spotify API using Python(Django/Django Rest Framework) and Javascript(React).",
      [
        "Django",
        "Django Rest framework",
        "Python",
        "Javascript",
        "React"
      ]
    );
    let project12 = new Project(
      "https://github.com/TimothyJan/PplPro",
      "PplPro",
      "Full-stack Employee Management System using ASP.NET Core, Angular, Bootstrap, and Azure SQL, implementing DTOs for data transfer, repository patterns for data access, and RESTful APIs for efficient employee, department, and role management, successfully deployed to Azure.",
      [
        "ASP .NET Core",
        "Entity Framework Core",
        "Angular",
        "Azure SQL",
        "Bootstrap",
      ],
      "https://timothyjan.github.io/PplPro-Frontend/"
    );
    let project13 = new Project(
      "https://github.com/TimothyJan/TaskTrackr",
      "TaskTrackr",
      "Task management application using ASP.NET Core, Entity Framework Core, Angular, Bootstrap, and SQL Server on AWS RDS, enabling efficient project assignment, progress tracking, and team collaboration.",
      [
        "ASP .NET Core",
        "Entity Framework Core",
        "Angular",
        "Bootstrap",
        "SQL Server",
        "AWS RDS"
      ],
      "https://timothyjan.github.io/TaskTrackr-Frontend/"
    );
    let project14 = new Project(
      "https://github.com/TimothyJan/MQTT-Client",
      "MQTT Subscriber Client",
      "Python-based MQTT subscriber application using tkinter for UI, multi-threaded message handling, and data export to CSV or text formats.",
      [
        "Python",
        "Tkinter",
        "pandas",
        "paho.mqtt.client"
      ]
    );
    this.projects.push(
      project14,
      project13,
      project12,
      project11,
      project10,
      project9,
      project8,
      project7,
      project6,
      project5,
      project4,
      project3,
      project2,
      project1);
  }
}
